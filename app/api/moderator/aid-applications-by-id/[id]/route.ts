import { applicationsById } from '@/controller/ModeratorController'
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
): Promise<NextResponse> {
    try {
        const { id } = params
        return await applicationsById(id)
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'server error',
                error: (error as Error).message,
            },
            { status: 500 }
        )
    }
}
