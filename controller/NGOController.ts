import ApplicationModel from "@/model/ApplicationModel"
import { NextResponse } from "next/server"

export const getApplications = async (userid: string): Promise<NextResponse> => {
    try {
        if (!userid) {
            return NextResponse.json({
                success: false,
                message: `not authed`

            })
        }
        const allApplications = await ApplicationModel.find()
        if (!allApplications) {
            return NextResponse.json({
                success: false,
                message: `no application found`
            })
        }
        return NextResponse.json({
            success: true,
            message: `applications found`,
            allApplications
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}