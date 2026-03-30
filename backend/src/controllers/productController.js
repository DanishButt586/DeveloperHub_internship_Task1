const Product = require("../models/Product");

const getProducts = async (req, res) => {
    try {
        const keyword = req.query.keyword ? req.query.keyword.trim() : "";
        const category = req.query.category ? req.query.category.trim().toLowerCase() : "";
        const sort = req.query.sort ? req.query.sort.trim().toLowerCase() : "newest";

        const filter = {};

        if (category && category !== "all") {
            filter.category = category;
        }

        if (keyword) {
            filter.$or = [
                { name: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { category: { $regex: keyword, $options: "i" } },
            ];
        }

        const sortOptions = {
            newest: { createdAt: -1 },
            price_asc: { price: 1 },
            price_desc: { price: -1 },
            name_asc: { name: 1 },
        };

        const products = await Product.find(filter).sort(sortOptions[sort] || sortOptions.newest);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product", error: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
};
