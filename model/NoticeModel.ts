import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String
},{ timestamps: true })

export default mongoose.models.Notice || mongoose.model(`Notice`, noticeSchema) 