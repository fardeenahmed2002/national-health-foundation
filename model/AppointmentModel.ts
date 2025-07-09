import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    doctor: {
        type: String,
    },
    date: {
        type: String,
    },
    serialNumber: {
        type: Number,
    },
    patientName: {
        type: String,
    },
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    reason: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
