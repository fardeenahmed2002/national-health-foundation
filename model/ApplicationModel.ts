import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    fullName: String,
    age: String,
    condition: String,
    description: String,
    prescriptionImage: String,
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: `User` }
}, { timestamps: true })

export default mongoose.models.Application || mongoose.model("Application", applicationSchema);