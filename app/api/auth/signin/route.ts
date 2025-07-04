import { isLoggedIn, login } from "@/controller/AuthController";
import { userAuth } from "@/middleware/userAuth";
import connectToDb from "@/utils/DataBaseConnection";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
    try {
        await connectToDb()
        const { email, password } = await req.json()
        return login(email, password)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "server error",
            error: (error as Error).message
        }, { status: 500 })
    }
}

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: 'not authed'
            }, { status: 401 })
        }
        return isLoggedIn(req)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: 'server error'
        }, { status: 500 })
    }
}