import { getAllNotices } from "@/controller/VisitorController"
import connectToDb from "@/utils/DataBaseConnection"
import { NextResponse } from "next/server"

export const GET = async (): Promise<NextResponse> => {
    try {
        await connectToDb()
        return getAllNotices()
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}