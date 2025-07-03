import nodemailer from "nodemailer"
import dotenv from "dotenv"
import path from "path"
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const smtpPassword = process.env.SMTP_PASSWORD
if (!smtpPassword) {
    throw new Error("SMTP_PASSWORD not defined in environment variables");
}
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: `fardeenahamed2002@gmail.com`,
        pass: smtpPassword,
    },
})

export default transporter
