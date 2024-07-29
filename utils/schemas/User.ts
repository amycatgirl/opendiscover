import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

interface User {
    _id: string,
    username: string,
    discriminator: string
    profile: {
        content: string,
        background: {
            _id: string,
            tag: string
        }
    }
}

const userSchema = new Schema({
    _id: String,
    username: String,
    discriminator: String,
    profile: {
        content: String,
        background: {
            _id: String,
            tag: String
        }
    }
})

const UserModel = model("users", userSchema)
type RawUserDocument = InferRawDocType<typeof userSchema>

export default UserModel
export type { RawUserDocument, User }