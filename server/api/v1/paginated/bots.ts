import { useRoute } from "nuxt/app"
import BotModel, { Bot, RawBotDocument } from "~/utils/schemas/Bot"
import ServerMemberModel from "~/utils/schemas/JoinedServers"
import UserModel, { User } from "~/utils/schemas/User"

type PaginationInfo = {
  pageNumber: number,
  limit: number
}

type PaginationResult = {
  botsInTotal?: number,
  previous?: PaginationInfo,
  next?: PaginationInfo,
  data?: {bot: Bot, user: User, serversIn: number }[],
  rowsPerPage?: number
}

export default defineEventHandler(async (event) => {
  try {
    const route = event.context
    const pageNumber = parseInt((route.params?.page as string)) ?? 0;
    const limit = parseInt((route.params?.limit as string)) ?? 12;
    const totalPosts = await BotModel.countDocuments().and([{public: true}]).exec()
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    let result: PaginationResult = {}
    result.botsInTotal = totalPosts;
    if (startIndex > 0) {
      result.previous = {
        pageNumber: pageNumber - 1,
        limit: limit,
      };
    }
    if (endIndex < totalPosts) {
      result.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
      };
    }
    const botData = await BotModel.find()
      .sort("-_id")
      .and([{public: true}])
      .skip(startIndex)
      .limit(limit)
      .lean();
    
    const userData = await UserModel.find()
      .sort("-_id")
      .exists("bot", true)
      .skip(startIndex)
      .limit(limit)
      .lean();

    result.data = []
    for await (const bot of botData) {
      const serverCount = await ServerMemberModel.countDocuments({"_id.user": bot._id}).exec() 
      const relatedUser = userData.find((el) => el._id === bot._id)
      const {token, ...otherInfo} = bot
      if (!relatedUser) continue

      result.data.push({
        bot: otherInfo,
        user: relatedUser as User,
        serversIn: serverCount
      })
    }

    if (limit) {
      result.rowsPerPage = limit;
    }


    return result
  } catch (err) {
    console.error("failed :c")
  }
})

export type { PaginationResult }
