import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: String,
    description: String,
    icon: String,
    banner: String,
    flags: String,
    nsfw: Boolean,
    analytics: Boolean
})

const UserModel = model("servers", userSchema)
type RawUserDocument = InferRawDocType<typeof userSchema>

export default UserModel
export type { RawUserDocument }