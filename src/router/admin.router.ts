import express from "express";
import roleMiddleware from "../middleware/role.middleware.js";
import adminController from "../controllers/admin.controller.js";
import { validation } from "../middleware/destractObject.middleware.js";

const router = express.Router();

// api/admin/..

router.post("/user", roleMiddleware("ADMIN"), adminController.createUser);
router.patch("/user", roleMiddleware("ADMIN"), adminController.updateUser);
router.get("/user", roleMiddleware("ADMIN"), adminController.getUsers);
router.delete("/user", roleMiddleware("ADMIN"), adminController.deleteUser);

router.post("/destract-object",  validation, adminController.createDestractObject);
router.patch("/destract-object", validation, adminController.updateDestractObject);
router.get("/destract-object", adminController.getDestractObjects);
router.delete("/destract-object", adminController.deleteDestractObject);

export default router;