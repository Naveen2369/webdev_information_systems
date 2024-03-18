const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    }
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;