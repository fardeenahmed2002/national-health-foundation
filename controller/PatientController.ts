
import AppointmentModel from "@/model/AppointmentModel";
import { Usermodel } from "@/model/UserModel";
import { isMissing } from "@/utils/MissingFields";
import { NextResponse } from "next/server";

export const appointment = async (
  patientName: string,
  age: number | string,
  gender: string,
  date: string,
  reason: string,
  doctor: string,
  userid: string
): Promise<NextResponse> => {
  try {

    const MissingFields = isMissing(
      [patientName, "patientName"],
      [age, "age"],
      [gender, "gender"],
      [date, "date"],
      [reason, "reason"],
      [doctor, "doctor"]
    );
    if (MissingFields) return MissingFields;


    const appointmentDate = new Date(date).toISOString().split("T")[0];


    const existingCount = await AppointmentModel.countDocuments({
      doctor,
      date: appointmentDate,
    });

    const serialNumber = existingCount + 1;

    const appointment = new AppointmentModel({
      patientName,
      age,
      gender,
      date: appointmentDate,
      reason,
      doctor,
      serialNumber,
      id: userid
    });

    await appointment.save();


    const user = await Usermodel.findById(userid);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    user.appointments?.push(appointment._id)

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully",
      serial: serialNumber,
    });

  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}



export const getAppointments = async (userid: string) => {
  try {
    const today = new Date().toISOString().split("T")[0]

    const appointment = await AppointmentModel.find({
      id: userid,
      date: { $gte: today }
    }).sort({ date: 1 });

    if (!appointment) {
      return NextResponse.json({
        success: false,
        message: `no appointment found`
      }, { status: 404 })
    }
    return NextResponse.json({
      success: true,
      message: `found`,
      appointment
    })
  } catch (error) {
    console.error("appointment error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}