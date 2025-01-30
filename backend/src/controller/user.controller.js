import { User } from "../model/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  try {
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
    });

    if (!user)
      return res
        .status(500)
        .json({ message: "something went wrong while creating user" });

    const token = user.genreateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const isMatch = await user.isPasswordCorrect(password);

  if (!isMatch)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = user.genreateAuthToken();

  res.status(200).json({ token, user });
};

export { register, login };

// login, logout, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser
