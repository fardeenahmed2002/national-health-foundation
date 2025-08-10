import { applicationsById } from "@/controller/ModeratorController";
import { NextResponse } from "next/server";

interface Context {
  params: { id: string };
}

export async function GET(
  request: Request,
  context: Context
): Promise<NextResponse> {
  try {
    const { id } = context.params;
    return await applicationsById(id);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "server error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
