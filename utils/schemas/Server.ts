import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

const serverSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    banner: String,
    flags: String,
    nsfw: Boolean,
    analytics: Boolean
})

const Server = model("servers", serverSchema)
type RawServerDocument = InferRawDocType<typeof serverSchema>

export default Server
export type { RawServerDocument }