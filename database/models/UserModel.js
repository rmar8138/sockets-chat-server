const mongoose = require("mongoose");
const userSchema = require("./../schemas/userSchema");

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
