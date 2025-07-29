import { signup } from "@/controller/AuthController"
import connectToDb from "@/utils/DataBaseConnection"
import { NextResponse } from "next/server"
// /api/auth/signup
export const POST = async (req: Request): Promise<NextResponse> => {
    try {
        await connectToDb()
        const { name, email, password, phone, address, role } = await req.json()
        return signup(name, email, password, phone, address, role)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "server error",
            error: (error as Error).message
        }, { status: 500 })
    }
}
