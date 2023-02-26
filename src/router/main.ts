import express from "express";
import AuthController from "../controllers/auth.controller.js";
// import roleMiddleware from "../middleware/role.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// api/auth/..
router.post("/registration", AuthController.registration);
router.post("/login", AuthController.login);
// router.get("/users", roleMiddleware("USER"), AuthController.getUsers);
router.get("/users", authMiddleware, AuthController.getUsers);

export default router;