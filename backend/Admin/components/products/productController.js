const service = require("./productService");

const createProduct = async (req, res) => {
    try {
        let product = await service.createProduct(req, res)
        if (product) {
            res.status(201).json({ status: true, message: "Product created successfully", product });
        }
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await service.getAllProducts(req, res);
        if (products) {
            res.status(201).json({ status: true, message: "Product Listing successfully", products });
        }
        // res.status(200).json(products);
    } catch (error) {
        console.log({ status: false, message: error.message });
    }
};
const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const products = await service.UpdateProduct(id, updateData);
        if (products && products.status != false) {
            return res.status(200).json({ status: true, message: "Product update successfully", products });
        }
        res.status(500).send({ success: false, message: "Product not found" });

    } catch (error) {
        console.log(error);
        res.status(404).json({ status: false, message: error.message });
    }
};

const getView = async (req, res) => {
    try {
        const products = await service.getView(req, res, req.params.id);
        if (products) {
            return res.status(201).json({ status: true, message: "Product View successfully", products });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const getDelect = async (req, res) => {
    try {
        const products = await service.getDelect(req.params.id);
        if (products) {
            res.status(201).json({ status: true, message: "Product deleted successfully", products });
        }
        res.status(500).json({ status: false, message: "Product not found" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = { createProduct, getAllProducts, UpdateProduct, getDelect, getView };
