import express from "express";

import roleMiddleware from "../middleware/role.middleware.js";

import RoleController from "../controllers/role.controller.js";

import { ROLES } from "../enums/main.js";

const router = express.Router();
const {ADMIN} = ROLES;
// api/role/..
router.post("/", roleMiddleware(ADMIN), RoleController.createRole);
router.get("/", roleMiddleware(ADMIN), RoleController.getRoles);

export default router;