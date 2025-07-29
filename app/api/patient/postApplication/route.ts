import { applyApplication } from "@/controller/PatientController";
import { userAuth } from "@/middleware/userAuth";
import connectToDb from "@/utils/DataBaseConnection";
import { uploadImage } from "@/utils/UploadImage";
import { NextRequest, NextResponse } from "next/server";

// /api/patient/postApplication
export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDb()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: "user is not authorized"
            })
        }
        const formData = await req.formData()
        const fullName = formData.get('fullName') as string
        const age = formData.get('age') as string
        const condition = formData.get('condition') as string
        const description = formData.get('description') as string
        let prescriptionImage
        try {
            prescriptionImage = await uploadImage(formData, `prescriptionImage`, `prescriptionImage`, 2)
        } catch (uploadError) {
            return NextResponse.json({
                success: false,
                message: (uploadError as Error).message
            }, { status: 501 })
        }
        const result = await applyApplication(auth.userid, fullName, age, condition, description, prescriptionImage)
        return result
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}