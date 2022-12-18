import { Document, Schema } from "mongoose"

import mongoose from "mongoose"

export interface IProduct extends Document {
  user: {}
  title: string
  briefIntro: string
  about: string
  amount: Number
  variations: {
    firstVariation: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
    secondVariation: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
    thirdVariation: {
      name: string
      about: string
      quantity: Number
      pledgeMinimum: Number
    }
  }
}

const ProductSchema: Schema = new mongoose.Schema<IProduct>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
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
})

export default mongoose.model<IProduct>("Product", ProductSchema)
