import { login } from "@/controller/AuthController";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse> => {
    try {
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