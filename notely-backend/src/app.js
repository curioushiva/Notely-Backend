const express = require('express');
const Notely = require('./db/models/notely.model');

/* Server instance */
const app = express();

/* Middleware */
app.use(express.json());

/* 
REST API :
POST
GET
PATCH
DELETE
*/

/* POST - To create or store data on db */
app.post("/notes", async (req, res) => {
    const data = req.body;
    try {
        await Notely.create({
            title: data.title,
            description: data.description
        });

        return res.status(201).json({
            message: "Note Created"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create note"
        });
    }

})

/* GET - To retrieve data from db */
app.get("/notes", async (req, res) => {

    try {
        /* Find all the notes */
        const notes = await Notely.find();

        /* Cnd based finding */
        // const notes = await Notely.find({
        //     title: "Study"
        // });

        return res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes
        });

        /* 
        find => [{}],{}] or [] 
        findOne => {} or null
        */

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to Fetch notes"
        });
    }

})

/* DELETE - To delete some data from db */
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Notely.findOneAndDelete({
            _id: id
        });

        return res.status(200).json({
            message: "Note Deleted"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to delete note"
        });
    }

})

/* PATCH - To update some data in db */
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description
    try {
        await Notely.findOneAndUpdate(
            { _id: id },
            { description: description }
        );

        return res.status(200).json({
            message: "Note Updated"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to update note"
        });
    }

})


module.exports = app;