import { Usermodel } from "@/model/UserModel"
import { NextResponse } from "next/server"
export const getUserData = async (userid: string): Promise<NextResponse> => {
    try {
        if (!userid) {
            return NextResponse.json({
                success: false,
                message: 'user not authenticated'
            }, { status: 404 })
        }
        const user = await Usermodel.findById(userid)
        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'user not found'
            }, { status: 404 })
        }
        return NextResponse.json({
            success: true,
            message: 'user found',
            user
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: 'server error',
            error: (error as Error).message
        }, { status: 500 })
    }
}