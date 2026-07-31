const mongoose = require("mongoose");
/* Pointing Node's resolver at public DNS explicitly */
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

/* Fucntion to connect to db */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB")
    } catch (err) {
        console.log("Failed to connect to DB")
        console.error(err);
    }
}

module.exports = connectDB;