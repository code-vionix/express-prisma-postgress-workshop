// user router
import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);


export default router;
