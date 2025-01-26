import mongoose from "mongoose";

async function connect() {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected to HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}

export { connect };