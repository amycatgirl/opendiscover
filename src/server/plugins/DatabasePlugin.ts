import mongoose from "mongoose";

export default defineNitroPlugin(async (nitroApp) => {
    const config = useRuntimeConfig()
    console.log(config.DB_URI)
    try {
        await mongoose.connect(config.DB_URI)
    } catch (err) {
        console.error("Could not connect to the database.\n", err)
    }
})
