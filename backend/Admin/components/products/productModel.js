const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true, unique: true },
        productCode: { type: String },
        productOffer: { type: String },
        productDiscount: { type: String },
        productFav: { type: String },
        description: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        category: { type: String }, // You can add an enum if needed
        stock: { type: Number, required: true, min: 0, default: 0 },
        images: { type: [String], default: [] }, // Array of image URLs
        ratings: { type: Number, default: 0, min: 0, max: 5 }
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
