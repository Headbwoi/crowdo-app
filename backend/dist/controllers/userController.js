var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { sendConfirmationEmail } from "../config/email.js";
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
const generateConfirmationCode = (len, characters) => {
    let ans = "";
    for (let i = len; i > 0; i--) {
        ans += characters[Math.floor(Math.random() * characters.length)];
    }
    return ans;
};
//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getUserData = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(req.user);
}));
//@desc     Registers a User
//@route    POST /api/user/register
//@access   public
export const registerUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please Enter All fields");
    }
    //validates inputs
    if (!emailRegex.test(email)) {
        res.status(400);
        throw new Error("Please Enter A Valid Email");
    }
    if (!passwordRegex.test(password)) {
        res.status(400);
        throw new Error("Please Enter A Strong Password");
    }
    // checks if user exists
    const userExists = yield User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }
    const salt = yield bcrypt.genSalt();
    const hashedPassword = yield bcrypt.hash(password, salt);
    // creates the user
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmationCode: generateConfirmationCode(30, characters),
    });
    // const newUser = await User.create({})
    yield newUser.save((err) => {
        // checks if user was created
        if (err) {
            res.status(500);
            throw new Error("Failed To Register User");
        }
        res.status(201).json({
            _id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            status: newUser.status,
            token: generateToken(newUser.id),
        });
        sendConfirmationEmail(newUser.firstName, newUser.email, newUser.confirmationCode);
    });
}));
//@desc     Login a User
//@route    POST /api/user/login
//@access   private
export const loginUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User.findOne({ email });
    if (!user) {
        res.status(404);
        throw new Error("user not found");
    }
    if (user && (yield bcrypt.compare(password, user.password))) {
        if (user.status != "verified") {
            res.status(401);
            throw new Error("Please Verify Your Email");
        }
        res.status(200).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            status: user.status,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error("Password is invalid");
    }
}));
//@desc     Verifies a User
//@route    GET /api/user/verify/:confirmationCode
//@access   private
export const verifyUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({
        confirmationCode: req.params.confirmationCode,
    });
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    yield user
        .updateOne({ status: "verified" })
        .then(() => {
        res.status(200).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            status: user.status,
            token: generateToken(user._id),
        });
    })
        .catch((err) => {
        res.status(500);
        throw new Error(err);
    });
}));
