import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    isPatient: Boolean,
    isAdmin: Boolean,
    isModerator: Boolean,
    curaId: String,
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notice" }]

}, { timestamps: true })

export const Usermodel = mongoose.models.User || mongoose.model("User", userSchema);