import mongoose, { Document, model, Schema } from "mongoose";

interface UserInterface extends Document {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: "admin" | "user" | "farmer" | "logistics";
    address: {
        village?: string;
        city?: string;
        state?: string;
        pincode?: number;
    };
    profilePic?: string;
}

const userSchema = new Schema<UserInterface>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user", "farmer", "logistics"],
        default: "user"
    },
    address: {
        village: { type: String },
        city: { type: String },
        state: { type: String },
        pincode: { type: Number }
    },
    profilePic: {
        type: String
    }
});

const User = model<UserInterface>("User", userSchema);

export default User;
