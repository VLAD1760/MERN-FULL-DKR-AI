import { Router } from "express"
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); //domian/api/v1/user -> routes in use are under /user
appRouter.use("/chats", chatRoutes); //domain/api/v1/chats -> routes in use are under /chats

export default appRouter;