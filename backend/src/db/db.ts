import mongoose from "mongoose";
import { MongoDB } from "../config/config";

const URI = MongoDB as string;

const connectDB = async (): Promise<void> => {
    try {
        const connect = await mongoose.connect(URI);
        console.log(`MongoDB Connection Successful`);
    } catch (error) {
        console.log(`Error in connecting the MongoDB: ${error}`);
    }
}

export default connectDB; 