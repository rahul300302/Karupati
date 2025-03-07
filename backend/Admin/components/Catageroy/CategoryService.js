const Category = require("./CategoryModel");
const mongoose = require("mongoose")

const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        return await category.save();
    } catch (error) {
        return ({ error: error.message });
    }
};

const getAllCategorys = async (req, res) => {
    try {
        let { search,categoryName,page, limit } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const skip = (page - 1) * limit;
        let query = {};
        // Search by name or description (case-insensitive)
        if (search) {
            query.$or = [
                { categoryName: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

      
        if (categoryName) {
            query.categoryName = categoryName;
        }
        
        const categorys = await Category.find(query)
            .skip(skip)
            .limit(limit);
        const totalCategorys = await Category.countDocuments(query);

        res.status(200).json({
            totalCategorys,
            page,
            totalPages: Math.ceil(totalCategorys / limit),
            categorys
        });
    } catch (error) {
        console.log({ error: error.message });
    }
};

const getDelect = async (id) => {
    try {
        const category = await Category.findByIdAndDelete(new mongoose.Types.ObjectId(id));
        return category
    } catch (error) {
        return ({ error: error.message });
    }
};
const UpdateCategory = async (id, updateData) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            return ({ success: false, message: "Category not found" });
        }
        return await Category.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
    } catch (error) {
        return ({ success: false, message: error.message });
    }
};

const getView = async (req, res, id) => {
    try {
        const category = await Category.findById(id);
        return await category.save();
    } catch (error) {
        return ({ error: error.message });
    }
};

module.exports = { createCategory, getAllCategorys, UpdateCategory, getDelect, getView };
