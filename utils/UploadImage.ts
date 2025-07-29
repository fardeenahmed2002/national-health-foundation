import dotenv from "dotenv"
import path from "path"
import fs from 'fs'
import { CheckEnv } from "./CheckEnv"
import { uploadInCloudinary } from "./Cloudinary"

dotenv.config({ path: path.resolve(__dirname, "../.env") })

export const uploadImage = async (
    formData: any,
    fieldname: string,
    foldername: string,
    maxfilesize: number) => {
        
    const file = formData.get(fieldname)
    if (!file || !file.name) return null
    const MAX_SIZE = maxfilesize * 1024 * 1024
    if (file.size > MAX_SIZE) {
        throw new Error(`file size exceeds`)
    }
    const buffer = Buffer.from(await file.arrayBuffer())

    CheckEnv(process.env.USE_CLOUDINARY, 'USE_CLOUDINARY')

    if (process.env.USE_CLOUDINARY! === `true`) {
        try {
            const result = await uploadInCloudinary(buffer, { folder: foldername }) as { secure_url: string }
            return result.secure_url
        } catch (error) {
            console.error('Cloudinary upload error:', error)
            return null
        }
    }
    else {
        const filename = Date.now() + '-' + file.name.replace(/\s+/g, '')
        const uploadDir = path.join(process.cwd(), 'public', foldername)
        fs.mkdirSync(uploadDir, { recursive: true })
        const filepath = path.join(uploadDir, filename)
        fs.writeFileSync(filepath, buffer)
        return `/${foldername}/${filename}`
    }
}