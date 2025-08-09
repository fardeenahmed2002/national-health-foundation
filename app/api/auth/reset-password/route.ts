import { resetPassword } from "@/controller/AuthController"
import { userAuth } from "@/middleware/userAuth"
import connectToDb from "@/utils/DataBaseConnection"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDb()
        const { currentPassword, newPassword, confirmPassword } = await req.json()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: `not authed`
            }, { status: 401 })
        }
        return resetPassword(auth.userid, currentPassword, newPassword, confirmPassword)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}