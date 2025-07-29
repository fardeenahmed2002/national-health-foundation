import { v2 as cloudinary } from 'cloudinary'
import path from 'path'
import dotenv from 'dotenv'
import { CheckEnv } from './CheckEnv'

dotenv.config({ path: path.resolve(__dirname, "../.env") })

CheckEnv(process.env.CLOUDINARY_CLOUD_NAME, 'CLOUDINARY_CLOUD_NAME')
CheckEnv(process.env.CLOUDINARY_API_KEY, 'CLOUDINARY_API_KEY')
CheckEnv(process.env.CLOUDINARY_API_SECRET, 'CLOUDINARY_API_SECRET')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export const uploadInCloudinary = (buffer: Buffer, options = {}) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
            if (error) reject(error)
            else resolve(result)
        })
        stream.end(buffer)
    })
}