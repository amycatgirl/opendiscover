import ServerModel from "../../utils/schemas/Server"
export default defineEventHandler(async (event) => {
  const server = await ServerModel.findOne({});

  return server

})
