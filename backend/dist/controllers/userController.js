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
const generateToken = (id) => {
    //@ts-ignore
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getUserData = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(req.user);
}));
//@desc     Registers a User
//@route    POST /api/user/
//@access   public
export const registerUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please Enter All fields");
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
    const newUser = yield User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });
    // checks if user was created
    if (newUser) {
        res.status(201).json({
            _id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            token: generateToken(newUser.id),
        });
    }
    else {
        throw new Error("failed to create user");
    }
}));
//@desc     Login a User
//@route    POST /api/user/
//@access   private
export const loginUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User.findOne({ email });
    if (user && (yield bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else {
        throw new Error("Invalid credentials");
    }
}));
