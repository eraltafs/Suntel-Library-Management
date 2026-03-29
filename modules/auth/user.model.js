import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: "String",
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["ADMIN", 'USER'],
        default: "USER"
    },
    password: { type: String, required: true }
}, { timestamps: true })


const userModel = mongoose.model("User", userSchema)


export default userModel