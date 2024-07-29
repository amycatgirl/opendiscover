import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

const botSchema = new Schema({
    owner: String,
    public: String,
    _id: String,
})

const BotModel = model("bots", botSchema)
type RawBotDocument = InferRawDocType<typeof botSchema>

export default BotModel
export type { RawBotDocument }