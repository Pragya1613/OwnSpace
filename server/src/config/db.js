import mongoose from "mongoose";

const connectDB = async () => {
    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
        throw new Error("Database configuration is missing");
    }

    const connection = await mongoose.connect(
        process.env.MONGODB_URI,
        {
            dbName: process.env.DB_NAME,
            serverSelectionTimeoutMS: 10000
        }
    );

    console.log(`MongoDB connected: ${connection.connection.name}`);
};

export default connectDB;