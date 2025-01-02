import { Request, Response } from "express";
import User, { IUser } from "../models/User";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userData: Partial<IUser> = req.body;
    console.log("userdata", req.body);
    const user = await User.create(userData);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};
