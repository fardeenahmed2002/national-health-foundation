import { applicationsById } from "@/controller/ModeratorController"
import { NextResponse } from "next/server"

export const GET = async (_: unknown, context: { params: { id: string } }) => {
    try {
        const { id } = context.params
        return applicationsById(id)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}