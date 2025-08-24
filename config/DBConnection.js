const mongoose = require("mongoose");

const DBConnection = async () => {
    try {
        mongoose
            .connect(process.env.MONGODB_URL)
            .then(() => console.log("Database connection successfull"))
            .catch((err) => {
                console.log(`DB CONNECTION ISSUES`);
                console.error(err.message);
                process.exit(1);
            });

    } catch (error) {
        console.error(" Error connecting to MongoDB:", error);
        console.error("MongoDB URL:", process.env.MONGODB_URL ? "Set" : "Not set");
        process.exit(1);
    }
}

module.exports = DBConnection;