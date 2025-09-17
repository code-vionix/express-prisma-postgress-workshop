// product router
import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

router.post("/product", async (req, res) => {
  const body = req.body;

  if (!body.name || !body.price || !body.userId) {
    return res.status(400).send({
      message: "Name or Price or User ID Must be Needed to Create an product",
    });
  }

  try {
    const product = await prisma.product.create({
      data: body,
    });

    res.status(201).send({
      status: "success",
      message: "Product added successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "Product not added!",
    });
  }
});

export default router;
