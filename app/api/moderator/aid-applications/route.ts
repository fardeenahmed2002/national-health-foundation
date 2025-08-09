import { getApplications } from "@/controller/ModeratorController"
import { userAuth } from "@/middleware/userAuth"
import connectToDb from "@/utils/DataBaseConnection"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    try {
        await connectToDb()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: `unauthorized`
            }, { status: 401 })
        }
        const searchValue = req.nextUrl.searchParams.get('search') || ""
        const urgencyValue = req.nextUrl.searchParams.get('urgency') || ""
        const fundValue = req.nextUrl.searchParams.get('fund') || ""
        return getApplications(auth.userid, searchValue, urgencyValue, fundValue)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}