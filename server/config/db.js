// Make connections with the database

const mongoose = require("mongoose");
const database = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
