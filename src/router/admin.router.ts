import express from "express";
import roleMiddleware from "../middleware/role.middleware.js";
import adminController from "../controllers/admin.controller.js";
import { validation } from "../middleware/destractObject.middleware.js";
import { ROLES } from "../enums/main.js";

const router = express.Router();
const {ADMIN} = ROLES;

// api/admin/..
// user routes
router.post("/user", roleMiddleware(ADMIN), adminController.createUser);
router.patch("/user", roleMiddleware(ADMIN), adminController.updateUser);
router.get("/user", roleMiddleware(ADMIN), adminController.getUsers);
router.delete("/user", roleMiddleware(ADMIN), adminController.deleteUser);
// destract object routes
router.post("/destract-object", roleMiddleware(ADMIN),  validation, adminController.createDestractObject);
router.patch("/destract-object", roleMiddleware(ADMIN), validation, adminController.updateDestractObject);
router.get("/destract-object", roleMiddleware(ADMIN), adminController.getDestractObjects);
router.delete("/destract-object", roleMiddleware(ADMIN), adminController.deleteDestractObject);

export default router;