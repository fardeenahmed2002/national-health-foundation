/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { applicationsById } from "@/controller/ModeratorController";

export async function GET(request: Request, context: any) {
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
