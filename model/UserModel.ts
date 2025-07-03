import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    isPatient: Boolean
})

export const Usermodel = mongoose.models.User || mongoose.model("User", userSchema);