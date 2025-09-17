import prisma from "../config/prisma.js";

const userController = {
  createUser: async (req, res) => {
    //  req body extract
    const body = req.body;

    if (!body.name || !body.email) {
      return res.status(400).send({
        message: "Name or Email Must be Needed to Create an user",
      });
    }
    console.log(body);

    try {
      const user = await prisma.user.create({
        data: body,
      });

      if (user) {
        res.status(201).send({
          status: "success",
          message: "User added successfully!",
          data: user,
        });
      } else {
        res.status(500).send({
          status: "error",
          message: "User not added!",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "User not added!",
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          role: true,
          productOwner: {
            omit: {
              id: true,
              userId: true,
            },
          },
        },
        // include: {
        //   productOwner: true,
        // },
      });
      res.status(200).send({
        status: "success",
        message: "Users found!",
        data: users,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "Users not found!",
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(req.params.id),
        },
        include: {
          _count: true,
          // productOwner: {
          //   select: {
          //     id: true,
          //     name: true,
          //     price: true,
          //   },
          // },
        },
      });
      res.status(200).send({
        status: "success",
        message: "User found!",
        data: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "error",
        message: "User not found!",
      });
    }
  },
};

export default userController;
