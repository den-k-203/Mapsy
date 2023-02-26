import express from "express";
import roleMiddleware from "../middleware/role.middleware.js";
import adminController from "../controllers/admin.controller.js";

const router = express.Router();

// api/admin/..
router.post("/", roleMiddleware("ADMIN"), adminController.createUser);
router.patch("/", roleMiddleware("ADMIN"), adminController.updateUser);
router.get("/", roleMiddleware("ADMIN"), adminController.getUsers);
router.delete("/", roleMiddleware("ADMIN"), adminController.deleteUser);

export default router;