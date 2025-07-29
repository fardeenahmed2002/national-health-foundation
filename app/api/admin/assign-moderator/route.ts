import { assignModerator } from "@/controller/AdminController";
import connectToDb from "@/utils/DataBaseConnection";
import { NextResponse } from "next/server";
// /api/admin/assign-moderator
export const POST = async (req: Request): Promise<NextResponse> => {
    try {
        await connectToDb()
        const { name, email, password, phone, address, role, curaId } = await req.json()
        return assignModerator(name, email, password, phone, address, role, curaId)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}