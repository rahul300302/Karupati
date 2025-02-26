const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String,},
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        token: { type: String },
        otp: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("AdminUser", userSchema);
