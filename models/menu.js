const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuschema = new Schema({
    name: { type: String, required: true }
});

const Menu = mongoose.model("Menu", menuschema);

module.exports = Menu;
