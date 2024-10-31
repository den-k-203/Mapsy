import express, { Router } from "express";

import roleMiddleware from "../middleware/role.middleware.js";
import { validation } from "../middleware/destractObject.middleware.js";

import adminController from "../controllers/admin.controller.js";

import { ROLES } from "../enums/main.js";
import multer from "multer";

const router: Router = express.Router();
const { ADMIN } = ROLES;

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req, file, cd): void => {
    cd(null, "./uploads");
  },
  filename: (req, file, cb): void => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload: multer.Multer = multer({ storage });


// api/admin/..
// user routes
router.patch("/user", roleMiddleware(ADMIN), adminController.updateUser);
router.get("/user", roleMiddleware(ADMIN), adminController.getUsers);
router.delete("/user", roleMiddleware(ADMIN), adminController.deleteUser);
// destract object routes
router.post("/destract-object", validation, adminController.createDestractObject);
router.patch("/destract-object", roleMiddleware(ADMIN), validation, adminController.updateDestractObject);
router.get("/destract-object", adminController.getDestractObjects);
router.delete("/destract-object/:_id", roleMiddleware(ADMIN), adminController.deleteDestractObject);
router.post("/upload", upload.single("file"), adminController.uploadFile);

export default router;