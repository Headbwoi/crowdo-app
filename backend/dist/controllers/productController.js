var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
//@desc     Gets all Products
//@route    GET /api/products
//@access   public
export const getAllProducts = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find();
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
    const product = new Product(req.body);
    try {
        const newProduct = yield product.save();
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
        throw new Error("product not found");
    }
    yield Product.deleteOne(product._id);
    res.status(200).json({ message: `${req.params.id} deleted successfully` });
}));
