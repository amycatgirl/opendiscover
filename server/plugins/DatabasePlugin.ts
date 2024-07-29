import mongoose from "mongoose";

export default defineNitroPlugin(async (nitroApp) => {
    try {
        await mongoose.connect("mongodb://localhost:27017/revolt")
    } catch (err) {
        console.error("Could not connect to the database.\n", err)
    }
})
