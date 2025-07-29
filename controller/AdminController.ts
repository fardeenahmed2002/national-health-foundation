import { Usermodel } from "@/model/UserModel"
import { isMissing } from "@/utils/MissingFields"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import NoticeModel from "@/model/NoticeModel"

export const assignModerator = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    role: string,
    curaId: string
) => {
    try {
        const MissingFields = isMissing(
            [name, 'name'],
            [email, 'email'],
            [password, 'password'],
            [phone, 'phone'],
            [address, 'address'],
            [role, 'role'],
            [curaId, 'curaID']
        )

        if (MissingFields) return MissingFields
        const existingUser = await Usermodel.findOne({ email })
        const existingCuraID = await Usermodel.findOne({ curaId })
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

        if (existingCuraID) {
            return NextResponse.json({
                success: false,
                message: `Cura id is already exists`
            }, { status: 409 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new Usermodel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            curaId,
            isModerator: true
        })
        await user.save()
        return NextResponse.json({
            success: true,
            message: `new moderator has been added`
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Assigning error!!!!!!!",
            error: (error as Error).message
        }, { status: 500 })
    }
}



export const postNotice = async (userid: string, title: string, content: string, image: string | null) => {
    try {
        if (!userid) {
            return NextResponse.json({
                success: false,
                message: `user not authed`
            }, { status: 401 })
        }
        const user = await Usermodel.findById(userid)
        if (!user) {
            return NextResponse.json({
                success: false,
                message: `user not found!!`
            }, { status: 404 })
        }
        const notice = new NoticeModel({
            title,
            content,
            image
        })
        await notice.save()
        user.notices?.push(notice._id)
        await user.save()
        return NextResponse.json({
            success: true,
            message: `Notice posted successfully!`
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `Notice post error!!!!`
        }, { status: 500 })
    }
}