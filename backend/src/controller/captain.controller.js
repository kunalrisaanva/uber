import { Captain } from "../model/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

const registerCaptian = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlready = await Captain.findOne({ email });

  if (isCaptainAlready)
    return res
      .status(400)
      .json({ message: " captain is already exist with this email" });

  try {
    const captain = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      },
    });

    if (!captain)
      return res
        .status(500)
        .json({ message: "something went wrong while creating user" });

    const token = user.genreateAuthToken();

    res.status(201).json({ token, captain });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const captainLogin = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
  
    const { email, password } = req.body;
  
    const captain = await Captain.findOne({ email }).select("+password");
  
    if (!captain)
      return res.status(401).json({ message: "Invalid email or password" });
  
    const isMatch = await captain.isPasswordCorrect(password);
  
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });
  
    const token = captain.genreateAuthToken();
  
    res.cookie("token", token);
  
    res.status(200).json({ token, captain });
  };

  const getCaptainProfile = async (req, res) => {
    const captain = await Captain.findById(req.captain._id);
  
    if (!captain) return res.status(401).json({ message: "captain unauthorized" });
  
    res.status(200).json({ captain });
  };

  const logoutCaptain = async (req, res) => {
    res.clearCookie("token");
  
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  
    await BlacklistToken.create({ token });
  
    res.status(200).json({ message: "loggout captain successfully" });
  };


export { registerCaptian , captainLogin , getCaptainProfile , logoutCaptain }
