import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token =
    req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
  //    console.log(token);

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const isBlacklisted = await User.findOne({ token: token });

  if (isBlacklisted) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    const user = await User.findById({ _id: decode._id });

    if (!user) return res.status(401), josn({ message: "user not found" });

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: `Unauthorized:${error?.message}` });
  }
};
