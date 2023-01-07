import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "verified"],
        default: "pending",
    },
    confirmationCode: {
        type: String,
        unique: true,
    },
}, { timestamps: true });
export default mongoose.model("User", userSchema);
