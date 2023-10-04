const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        name: String,
        phone: Number,
        email: String,
        language: [String],
        date: [String],
        location: String,
        classroomId: String
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema);