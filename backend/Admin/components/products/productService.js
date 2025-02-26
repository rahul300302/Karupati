const Product = require("./productModel");
const mongoose = require("mongoose")

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        return await product.save();
    } catch (error) {
        return ({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        let { search, productName, category, minPrice, maxPrice, page, limit } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const skip = (page - 1) * limit;
        let query = {};
        // Search by name or description (case-insensitive)
        if (search) {
            query.$or = [
                { productName: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        if (category) {
            query.category = category;
        }
        if (productName) {
            query.productName = productName;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseFloat(minPrice);
            if (maxPrice) query.price.$lte = parseFloat(maxPrice);
        }
        const products = await Product.find(query)
            .skip(skip)
            .limit(limit);
        const totalProducts = await Product.countDocuments(query);

        res.status(200).json({
            totalProducts,
            page,
            totalPages: Math.ceil(totalProducts / limit),
            products
        });
    } catch (error) {
        console.log({ error: error.message });
    }
};

const getDelect = async (id) => {
    try {
        const product = await Product.findByIdAndDelete(new mongoose.Types.ObjectId(id));
        return product
    } catch (error) {
        return ({ error: error.message });
    }
};
const UpdateProduct = async (id, updateData) => {
    try {
        const product = await Product.findById(id);
        if (!product) {
            return ({ success: false, message: "Product not found" });
        }
        return await Product.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    } catch (error) {
        return ({ success: false, message: error.message });
    }
};

const getView = async (req, res, id) => {
    try {
        const product = await Product.findById(id);
        return await product.save();
    } catch (error) {
        return ({ error: error.message });
    }
};

module.exports = { createProduct, getAllProducts, UpdateProduct, getDelect, getView };
