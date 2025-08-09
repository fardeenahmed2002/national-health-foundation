import { approveAnApplication } from "@/controller/ModeratorController"
import { userAuth } from "@/middleware/userAuth"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const { name, condition, age, fund, urgency, applicationId } = await req.json()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: `not authorized`
            }, { status: 401 })
        }
        return approveAnApplication(auth.userid, name, condition, age, fund, urgency, applicationId)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}