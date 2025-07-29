import { postNotice } from "@/controller/AdminController"
import { userAuth } from "@/middleware/userAuth"
import connectToDb from "@/utils/DataBaseConnection"
import { uploadImage } from "@/utils/UploadImage"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {

        await connectToDb()
        const auth = await userAuth(req)
        if (!auth.authorized) {
            return NextResponse.json({
                success: false,
                message: `user is not authorized`
            }, { status: 401 })
        }

        const formData = await req.formData()
        const title = formData.get(`title`) as string
        const content = formData.get(`content`) as string
        let image
        try {
            image = await uploadImage(formData, `image`, `notice-image`, 2)
        } catch (uploadError) {
            return NextResponse.json({
                success: false,
                message: (uploadError as Error).message
            }, { status: 501 })
        }
        const result = await postNotice(auth.userid, title, content, image)
        return result
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`
        }, { status: 500 })
    }
}