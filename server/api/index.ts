import Server from "../../utils/schemas/Server"
export default defineEventHandler(async (event) => {
  const server = await Server.findOne({});

  return server

})
