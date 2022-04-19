// Connecting with the database

const mongoose = require('mongoose');

const database = process.env.MONGO_URI

module.exports.connectDB = async() => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
