import prisma from "../config/prisma.js";
export default async function productById(id) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
}
