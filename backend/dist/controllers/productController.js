"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product = require("../models/productModel");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new Product(req.body);
    try {
        const newProduct = yield product.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield Product.findById(req.params.id);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
    }
    yield Product.deleteOne(req.params._id);
    res.status(200).json({ message: `${req.params.id} deleted successfully` });
});
module.exports = { getAllProducts, createProduct, deleteProduct };
