"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    briefIntro: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    variations: {
        type: Object,
        firstVariation: {
            name: {
                type: String,
                required: true,
            },
            about: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            pledgeMinimum: {
                type: Number,
                required: true,
            },
        },
        secondVariation: {
            name: {
                type: String,
                required: true,
            },
            about: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            pledgeMinimum: {
                type: Number,
                required: true,
            },
        },
        thirdVariation: {
            name: {
                type: String,
                required: true,
            },
            about: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            pledgeMinimum: {
                type: Number,
                required: true,
            },
        },
    },
});
module.exports = mongoose.model("Product", productSchema);
