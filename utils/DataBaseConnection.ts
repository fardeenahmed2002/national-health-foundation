import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(__dirname, "../.env") })

import mongoose from "mongoose"

const connectToDb = async () => {
  try {
    const uri = process.env.MONGO_URI
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables !!!!!")
    }
    await mongoose.connect(uri);
    console.log("Database connected")
  } catch (error) {
    console.log((error as Error).message)
  }
}
export default connectToDb
