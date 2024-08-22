import { useRoute } from "nuxt/app"
import ServerModel, { RawServerDocument } from "~/utils/schemas/Server"

type PaginationInfo = {
  pageNumber: number,
  limit: number
}

type PaginationResult = {
  serversInTotal?: number,
  previous?: PaginationInfo,
  next?: PaginationInfo,
  data?: RawServerDocument,
  rowsPerPage?: number
}

export default defineEventHandler(async (event) => {
  try {
    const route = event.context
    const pageNumber = parseInt((route.params?.page as string)) ?? 0;
    const limit = parseInt((route.params?.limit as string)) || 12;
    const totalPosts = await ServerModel.countDocuments().and([{discoverable: true}]).exec()
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    let result: PaginationResult = {}
    result.serversInTotal = totalPosts;
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
    result.data = await ServerModel.find()
      .sort("-_id")
      .and([{discoverable: true}])
      .skip(startIndex)
      .limit(limit)
      .lean();

      if (limit) {
        result.rowsPerPage = limit;
      }

    return result
  } catch (err) {
    console.error("failed :c")
    return {
	    error: err.message
  	}
    }
})

export type { PaginationResult }
