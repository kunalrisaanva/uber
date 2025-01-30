import express from 'express';
import {body} from "express-validator"
import { register ,login , getUserProfile ,logout} from '../controller/user.controller.js';

import { authMiddleware }  from "../middleware/auth.middleware.js"

const router = express.Router();


router.route("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 2 characters"),
]).post(register);

router.route("/login",[
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 characters long")
]).post(login);

router.route("/profile").get(authMiddleware,getUserProfile);

router.route('/logout').get(authMiddleware,logout);


export default router;