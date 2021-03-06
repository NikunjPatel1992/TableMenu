const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const Users = mongoose.model("Users", userschema);

module.exports = Users;
