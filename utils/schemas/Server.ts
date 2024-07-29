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

const ServerModel = model("servers", serverSchema)
type RawServerDocument = InferRawDocType<typeof serverSchema>

export default ServerModel
export type { RawServerDocument }