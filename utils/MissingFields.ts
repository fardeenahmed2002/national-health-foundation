import { NextResponse } from "next/server";

export const isMissing = (...fields: [any, string][]) => {
    for (const [field, name] of fields) {
        if (!field) {
            return NextResponse.json({
                success: false,
                message: `${name} is required`
            }, { status: 400 });
        }
    }
};
