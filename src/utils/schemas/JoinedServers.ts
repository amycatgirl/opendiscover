import mongoose, { type InferRawDocType } from "mongoose";

const { Schema, model } = mongoose

interface ServerMembers {
    _id: {
        server: string,
        user: string
    }
}

const serverMembersSchema = new Schema({
    _id: {
        server: String,
        user: String
    }
})

const ServerMemberModel = model("server_members", serverMembersSchema)

export default ServerMemberModel
export type { ServerMembers }