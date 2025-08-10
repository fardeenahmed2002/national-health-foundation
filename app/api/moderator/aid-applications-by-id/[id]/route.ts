import { NextResponse } from 'next/server'
import { applicationsById } from '@/controller/ModeratorController'

type Params = {
  params: {
    id: string
  }
}

export async function GET(
  request: Request,
  context: Params
) {
  try {
    const { id } = context.params
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
