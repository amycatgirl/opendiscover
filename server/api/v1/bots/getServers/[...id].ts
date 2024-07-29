import BotModel from "~/utils/schemas/Bot";
import ServerMemberModel from "~/utils/schemas/JoinedServers";
import ServerModel from "~/utils/schemas/Server";

export default defineEventHandler(async (event) => {
  const botId = getRouterParam(event, "id");
  if (!(await BotModel.findById(botId).exec())) {
    return "This is not a bot"
  }

  console.log(botId)

  const serversJoined = await ServerMemberModel.find({ "_id.user": botId }).lean()

  const withInformation = Promise.all(serversJoined.map(async (joinInfo) => {
    console.log(joinInfo._id?.server)
    const server = await ServerModel.findOne({ _id: joinInfo._id?.server }).lean()
    console.log(server)

    return server
  }))

  return {
    servers: withInformation
  }

})
