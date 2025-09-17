// root rotuter
import express from "express";
import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);

router.use("/", (req, res) => {
  res.send("Welcome to Mamar!");
});

export default router;
