import { appointment, getAppointments } from "@/controller/PatientController"
import { userAuth } from "@/middleware/userAuth"
import connectToDb from "@/utils/DataBaseConnection"
import { NextRequest, NextResponse } from "next/server"
// /api/patient
export const POST = async (req: NextRequest) => {
    try {
        await connectToDb()
        const { patientName, age, gender, date, reason, doctor } = await req.json()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: "user is not authorized"
            })
        }
        return appointment(patientName, age, gender, date, reason, doctor, auth.userid)
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        })
    }
}


export const GET = async (req: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDb()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: "user is not authorized"
            })
        }
        return getAppointments(auth.userid)

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        })
    }
}