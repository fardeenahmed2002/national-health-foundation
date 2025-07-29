import { getApplications } from "@/controller/NGOController";
import { userAuth } from "@/middleware/userAuth";
import connectToDb from "@/utils/DataBaseConnection";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDb()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: "user is not authorized"
            })
        }
        return await getApplications(auth.userid)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}