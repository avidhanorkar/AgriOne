import mongoose, { Document, Schema, model } from "mongoose";

interface Location {
  state: string;
  district: string;
  pincode: string;
}

export interface ProductInterface extends Document {
  title: string;
  description: string;
  image: string;
  pricePerKG: number;
  expectedYield: number; // in tons
  harvestDate: Date;
  farmerId: mongoose.Types.ObjectId;
  category: "vegetable" | "fruit" | "grain" | "cash crop";
  location: Location;
  availableQuantity: number; // in tons
  isSoldOut: boolean;
}

const productSchema = new Schema<ProductInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    pricePerKG: {
      type: Number,
      required: true,
    },
    expectedYield: {
      type: Number,
    },
    harvestDate: {
      type: Date,
    },
    farmerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      enum: ["vegetable", "fruit", "grain", "cash crop"],
      required: true,
    },
    location: {
      state: { type: String, required: true },
      district: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    availableQuantity: {
      type: Number,
      required: true,
    },
    isSoldOut: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model<ProductInterface>("Product", productSchema);

export default Product;
