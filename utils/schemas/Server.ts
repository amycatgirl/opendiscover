import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

const serverSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    icon: {
        _id: String,
        tag: String
    },
    banner: {
        _id: String,
        tag: String
    },
    flags: String,
    nsfw: Boolean,
    analytics: Boolean
})

const ServerModel = model("servers", serverSchema)
type RawServerDocument = InferRawDocType<typeof serverSchema>

export default ServerModel
export type { RawServerDocument }