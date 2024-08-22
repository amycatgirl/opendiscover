import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

interface Bot {
    _id?: Nullable<string>,
    owner?: Nullable<string>,
    public?: Nullable<boolean>,
    token?: Nullable<string>
}

const botSchema = new Schema({
    _id: String,
    owner: String,
    public: Boolean,
    token: String,
})

const BotModel = model("bots", botSchema)
type RawBotDocument = InferRawDocType<typeof botSchema>

export default BotModel
export type { RawBotDocument, Bot }