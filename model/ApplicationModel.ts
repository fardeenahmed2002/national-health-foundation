import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    fullName: String,
    age: String,
    gender: String,
    address: String,
    phoneNumber: String,
    condition: String,
    description: String,
    prescriptionImage: String,
    fund: Number,
    paymentMethod: String,
    paymentNumber: String,
    receiverName: String,
    relation: String,
    urgencylevel: String,
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isApproved: {
        type: Boolean,
        default: false
    },
    
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model("Application", applicationSchema);
