const service = require("./CategoryService");

const createCategory = async (req, res) => {
    try {
        let Category = await service.createCategory(req, res)
        if (Category) {
            res.status(201).json({ status: true, message: "Category created successfully", Category });
        }
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

const getAllCategorys = async (req, res) => {
    try {
        const Categorys = await service.getAllCategorys(req, res);
        if (Categorys) {
            res.status(201).json({ status: true, message: "Category Listing successfully", Categorys });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
const UpdateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const Categorys = await service.UpdateCategory(id, updateData);
        if (Categorys && Categorys.status != false) {
            return res.status(200).json({ status: true, message: "Category update successfully", Categorys });
        }
        res.status(500).send({ success: false, message: "Category not found" });

    } catch (error) {
        console.log({ status: false, message: error.message });
    }
};

const getView = async (req, res) => {
    try {
        const Categorys = await service.getView(req, res, req.params.id);
        if (Categorys) {
            return res.status(201).json({ status: true, message: "Category View successfully", Categorys });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const getDelect = async (req, res) => {
    try {
        const Categorys = await service.getDelect(req.params.id);
        if (Categorys) {
            res.status(201).json({ status: true, message: "Category deleted successfully", Categorys });
        }
        res.status(500).json({ status: false, message: "Category not found" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = { createCategory, getAllCategorys, UpdateCategory, getDelect, getView };
