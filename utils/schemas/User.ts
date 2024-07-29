import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    username: String,
    discriminator: String
})

const UserModel = model("users", userSchema)
type RawUserDocument = InferRawDocType<typeof userSchema>

export default UserModel
export type { RawUserDocument }