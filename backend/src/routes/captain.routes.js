import express from "express";
import { body } from "express-validator";
import { registerCaptian ,captainLogin,logoutCaptain,getCaptainProfile,} from "../controller/captain.controller.js";


import { authCaptainMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();




router.route("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 2 characters"),
    body("vehicle.color").isLength({min:3}).withMessage("First name must be at least 2 characters"),
    body("vehicle.plate").isLength({min:3}).withMessage("First name must be at least 2 characters"),
    body("vehicle.opacity").isInt({min:1}).withMessage("First name must be at least 2 characters"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("First name must be at least 2 characters"),
]).post( registerCaptian );


router.route("login").post(captainLogin);

router.route("/captainProfil").get(getCaptainProfile),

router.route("/logout").get(logoutCaptain)


export default router