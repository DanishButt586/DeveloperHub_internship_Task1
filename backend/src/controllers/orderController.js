const Order = require("../models/Order");

const createOrder = async (req, res) => {
    try {
        const { items, shippingAddress } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "Order items are required" });
        }

        if (!shippingAddress) {
            return res.status(400).json({ message: "Shipping address is required" });
        }

        const requiredShippingFields = ["fullName", "address", "city", "postalCode", "country", "phone"];
        const missingField = requiredShippingFields.find((field) => !shippingAddress[field]);

        if (missingField) {
            return res.status(400).json({ message: `Missing shipping field: ${missingField}` });
        }

        const normalizedItems = items.map((item) => ({
            product: item.product || item._id || item.id,
            name: item.name,
            qty: Number(item.qty || item.quantity || 1),
            price: Number(item.price || 0),
            image: item.image,
        }));

        const totalPrice = normalizedItems.reduce((acc, item) => acc + item.price * item.qty, 0);

        const order = await Order.create({
            items: normalizedItems,
            shippingAddress,
            totalPrice,
            status: "pending",
        });

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to place order", error: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 }).limit(100);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders", error: error.message });
    }
};

module.exports = {
    getOrders,
    createOrder,
};
