const mongoose = require("mongoose");

/* Creating schema to store data */
const notelySchema = new mongoose.Schema({
    title: String,
    description: String,
})

/* Creating model - collection pinned to "notes" to keep existing data */
const Notely = mongoose.model("Notely", notelySchema, "notes");

/*
CRUD Operations :
Create
Read
Update
Delete
*/

module.exports = Notely;
