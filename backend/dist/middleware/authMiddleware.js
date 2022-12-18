var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
export const protectRoute = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            //gets the token
            token = req.headers.authorization.split(" ")[1];
            //verify token
            //@ts-ignore
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = yield User.findById(decodedToken.id).select("-password");
            next();
        }
        catch (error) {
            res.status(401);
            throw new Error("Not authorised to access this route");
        }
    }
}));
