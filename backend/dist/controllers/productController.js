var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
//@desc     Gets all Products
//@route    GET /api/products
//@access   public
export const getAllProducts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find({ user: req.user.id });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
//@desc     Creates a Product
//@route    POST /api/products
//@access   private
export const createProduct = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const product = new Product(req.body)
    try {
        const newProduct = yield Product.create(Object.assign(Object.assign({}, req.body), { user: req.user.id }));
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
//@desc     Updates a Product
//@route    PUT /api/products/:id
//@access   private
export const updateProduct = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // check fpr user
    if (!req.user) {
        res.status(401);
        throw new Error("user not found");
    }
    // makes sure the logged in user matches the product user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("user not authorised");
    }
    const updatedProduct = yield Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedProduct);
}));
//@desc     Deletes a Product
//@route    DELETE /api/products/:id
//@access   private
export const deleteProduct = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // check fpr user
    if (!req.user) {
        res.status(401);
        throw new Error("user not found");
    }
    // makes sure the logged in user matches the product user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("user not authorised");
    }
    yield product.deleteOne();
    res.status(200).json({ message: `${req.params.id} deleted successfully` });
}));
