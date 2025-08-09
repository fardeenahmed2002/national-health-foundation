import ApplicationModel from "@/model/ApplicationModel"
import ApprovedApplicationsModel from "@/model/ApprovedApplicationsModel"
import { Usermodel } from "@/model/UserModel"
import transporter from "@/utils/NodeMailer"
import { NextResponse } from "next/server"

export const getApplications = async (userid: string, searchValue: string, urgencyValue: string, fundValue: string): Promise<NextResponse> => {
    try {
        if (!userid) {
            return NextResponse.json({
                success: false,
                message: `not authed`

            }, { status: 401 })
        }

        const searchRgex = new RegExp('.*' + searchValue + '.*', 'i')

        const conditions: any = {
            isApproved: false,
            $or: [
                { fullName: { $regex: searchRgex } },
                { phoneNumber: { $regex: searchRgex } },
            ]
        }
        const fundAsNumber = Number(fundValue)

        if (urgencyValue) {
            conditions.urgencylevel = urgencyValue
        }

        if (fundAsNumber > 0 && !isNaN(fundAsNumber)) {
            conditions.fund = { $lte: fundAsNumber }
        }

        const allApplications = await ApplicationModel.find(conditions).sort({ createdAt: -1 })
        if (!allApplications) {
            return NextResponse.json({
                success: false,
                message: `no application found`
            }, { status: 404 })
        }
        return NextResponse.json({
            success: true,
            message: `applications found`,
            allApplications
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `server error`,
            error: (error as Error).message
        }, { status: 500 })
    }
}


export const applicationsById = async (id: string) => {
    try {
        const details = await ApplicationModel.findById(id)
        if (!details) {
            return NextResponse.json({
                success: false,
                message: `no details found`
            }, { status: 404 })
        }
        return NextResponse.json({
            success: true,
            messaeg: `details found`,
            details
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `error getting details`,
            error: (error as Error).message
        }, { status: 500 })
    }
}


export const approveAnApplication = async (
    userid: string,
    name: string,
    condition: string,
    age: string,
    fund: number,
    urgency: string,
    applicationId: string
) => {
    try {
        const moderator = await Usermodel.findById(userid)

        if (!moderator || !moderator.isModerator) {
            return NextResponse.json({
                success: false,
                message: `Only moderators can approve applications`,
            }, { status: 403 })
        }

        const mainApplication = await ApplicationModel.findById(applicationId).populate('applicant')

        if (!mainApplication) {
            return NextResponse.json({
                success: false,
                message: `Application not found`,
            }, { status: 404 })
        }
        const fundInNumber = Number(fund)
        await ApprovedApplicationsModel.create({
            name,
            condition,
            age,
            fund: fundInNumber,
            urgency,
            approvedBy: moderator._id
        })

        mainApplication.isApproved = true
        await mainApplication.save()

        const applicant = await Usermodel.findById(mainApplication.applicant._id)

        if (!applicant || !applicant.email) {
            return NextResponse.json({
                success: false,
                message: "Applicant email not found"
            }, { status: 404 })
        }

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: applicant.email,
            subject: "Application Approval Notice",

            html: `         <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 20px;">
                            <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <h2 style="color: #BB71FF; text-align: center;">🎉 Application Approved!</h2>
                            <p style="color: #333333; font-size: 16px;">
                                Hello <strong style="color: #000;">${applicant.name}</strong>,
                            </p>
                            <p style="color: #4B5563; font-size: 16px; line-height: 1.6;">
                                Your application for the patient <strong style="color: #111827;">${name}</strong> has been 
                                <span style="color: #10B981; font-weight: bold;">approved</span>. Our entire <strong style="color: #BB71FF;">CuraLink</strong> team and partnering NGOs will assist you as soon as possible.
                            </p>
                            <p style="color: #4B5563; font-size: 16px;">
                                <strong style="color: #BB71FF;">Approved Fund:</strong> ৳${fund} BDT
                            </p>
                            <div style="margin: 25px 0; text-align: center;">
                                <img src="https://cdn-icons-png.flaticon.com/512/9458/9458050.png" width="100" alt="Approved Icon" />
                            </div>
                            <p style="color: #4B5563; font-size: 16px;">
                                Please stay connected with us and keep faith in the Almighty Allah.
                            </p>
                            <p style="color: #4B5563; font-size: 16px;">
                                Best regards,<br/>
                                <strong style="color: #BB71FF;">Team CuraLink</strong>
                            </p>
                            </div>
                        </div>`}


        await transporter.sendMail(mailOptions)

        return NextResponse.json({
            success: true,
            message: `Application approved and email sent`
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `Could not post properly, try again later`,
            error: (error as Error).message
        }, { status: 500 })
    }
}
