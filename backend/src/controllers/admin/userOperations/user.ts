import { Request, Response } from "express";
import prisma from "../../../PrismaClient";

//user controller
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUserbyIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    if (!id) {
      res.status(400).json({
        error: "Please provide the user id to update the user details",
      });
      return;
    }
    if (!data) {
      res
        .status(400)
        .json({ error: "Please provide the user details to update" });
      return;
    }

    const user = await prisma.user.update({
      where: {
        clerkuserId: id,
      },
      data,
    });

    res.status(200).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserbyIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { clerkuserId } = req.body;
    if (!id && !clerkuserId) {
      res
        .status(400)
        .json({
          error: "Please provide either id or clerkuserId to delete the user",
        });
      return;
    }

    const whereCondition = id ? { id: parseInt(id) } : { clerkuserId };

    const deletedUser = await prisma.user.delete({
      where: whereCondition,
    });

    res.status(200).json(deletedUser);
  } catch (e) {
    console.error("Error deleting user:", e);
    res.status(500).json({ error: "Internal server error" });
  }
};
