import { Usermodel } from "@/model/UserModel"
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import path from "path";
import transporter from "@/utils/NodeMailer";
import { isMissing } from "@/utils/MissingFields"
import { CheckEnv } from "@/utils/CheckEnv";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
export const signup = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    role: string
): Promise<NextResponse> => {
    try {

        const MissingFields = isMissing(
            [name, 'name'],
            [email, 'email'],
            [password, 'password'],
            [phone, 'phone'],
            [address, 'address'],
            [role, 'role']
        )

        if (MissingFields) return MissingFields

        const existingUser = await Usermodel.findOne({ email })
        const existingPhoneNumber = await Usermodel.findOne({ phone })
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: 'user already exist'
            }, { status: 409 })
        }
        if (existingPhoneNumber) {
            return NextResponse.json({
                success: false,
                message: "Account already registerded with this phone number"
            }, { status: 409 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new Usermodel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            ...(role === `patient` && {
                isPatient: true,
            }),
        })
        await user.save()
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Cura Link – Your Health Companion",
            html: `
                    <div style="font-family:Arial, sans-serif; padding: 30px; background-color:#f4f6f8; color:#1a1a1a; line-height:1.6;">
                    <h2 style="color:#111926; text-align: center;">Welcome to <span style="color:#BB71FF;">Cura Link</span></h2>

                    <p style="font-size: 16px;">Hello <strong>${name}</strong>,</p>

                    <p style="font-size: 16px;">
                        Thank you for joining <strong>Cura Link</strong>. Your account has been successfully created!
                        We're committed to connecting you with the resources you need to stay informed and healthy.
                    </p>

                    <div style="margin: 20px 0; padding: 15px; background-color: #eaf6ff; border-left: 4px solid #49B3DB;">
                        <p style="margin: 0;">Get started by exploring your personalized health dashboard and curated articles.</p>
                    </div>

                    <p style="font-size: 16px;">If you have any questions, feel free to reach out to our support team.</p>

                    <p style="margin-top: 40px; font-size: 16px;">
                        Stay healthy and empowered,<br/>
                        <strong>The Cura Link Team</strong>
                    </p>
                    </div>`
        }
        await transporter.sendMail(mailOptions)

        const secret = process.env.JWT_SECRET
        if (!secret) {
            throw new Error("JWT_SECRET not defined in environment variables")
        }
        const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" })

        const response = NextResponse.json({
            message: `Registration successfull`,
            success: true,
            user,
            token
        })
        CheckEnv(process.env.NODE_ENV, 'NODE_ENV')
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV! === "production",
            sameSite: process.env.NODE_ENV! === "production" ? "lax" : "strict",
            maxAge: 7 * 24 * 60 * 60,
            path: "/",
        });

        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "server error",
            error: (error as Error).message
        }, { status: 500 })
    }
}

export const login = async (email: string, password: string): Promise<NextResponse> => {
    try {
        const MissingFields = isMissing(
            [email, 'email'],
            [password, 'password']
        )
        if (MissingFields) return MissingFields

        const user = await Usermodel.findOne({ email })
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "no user found"
            }, { status: 404 })
        }
        const valiedPassword = await bcrypt.compare(password, user.password)
        if (!valiedPassword) {
            return NextResponse.json({
                success: false,
                message: "Invalied password"
            }, { status: 404 })
        }
        CheckEnv(process.env.JWT_SECRET, 'JWT_SECRET')
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET!,
            { expiresIn: `7d` }
        )
        const response = NextResponse.json({
            message: `Login successful`,
            success: true,
            user,
            token
        })
        CheckEnv(process.env.NODE_ENV, 'NODE_ENV')
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV! === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60,
            path: "/",
        })
        return response
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "server error",
            error: (error as Error).message
        }, { status: 500 })
    }
}

export const logout = async (): Promise<NextResponse> => {
    try {
        const response = NextResponse.json({
            success: true,
            message: "Logout successful",
        })
        CheckEnv(process.env.NODE_ENV, `NODE_ENV`)
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV! === "production",
            sameSite: process.env.NODE_ENV! === "production" ? "none" : "strict",
            expires: new Date(0),
            path: "/",
        })
        return response
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}

export const isLoggedIn = async (req: NextRequest): Promise<NextResponse> => {
    try {
        return NextResponse.json({
            success: true,
            message: "account authenticated"
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'server error',
            error: (error as Error).message
        }, { status: 500 })
    }
}