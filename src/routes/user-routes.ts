import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
// Add more routes here if needed for the User model (e.g., /:id)

export default userRoutes;