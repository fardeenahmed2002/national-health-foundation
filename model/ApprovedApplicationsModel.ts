import mongoose from "mongoose";

const approvedApplicationSchema = new mongoose.Schema({
    name: { type: String },
    condition: { type: String },
    age: { type: String },
    fund: { type: Number },
    urgency: { type: String },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })


export default mongoose.models.ApprovedApplication || mongoose.model("ApprovedApplication", approvedApplicationSchema)