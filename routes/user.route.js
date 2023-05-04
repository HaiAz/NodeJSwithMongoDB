import userController from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

//lấy toàn bộ user
router.get("/", userController.getAllUser);

//thêm user
router.post("/", userController.createUser);

//xóa user
router.delete("/:_id", userController.deleteUser);
export default router;
