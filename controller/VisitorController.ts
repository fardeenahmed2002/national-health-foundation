import NoticeModel from "@/model/NoticeModel"
import { NextResponse } from "next/server"

export const getAllNotices = async () => {
    try {
        const notices = await NoticeModel.find().sort({ createdAt: -1 })
        if (!notices) {
            return NextResponse.json({
                success: false,
                message: `no notices found`
            }, { status: 404 })
        }
        return NextResponse.json({
            success: true,
            message: notices.length === 0 ? `no notices found` : `notices found`,
            notices
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `couldnot find any notices`
        }, { status: 500 })
    }
}