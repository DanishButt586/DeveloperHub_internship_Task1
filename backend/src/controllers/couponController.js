const Coupon = require("../models/Coupon");

const validateCoupon = async (req, res) => {
    try {
        const rawCode = req.body?.code || "";
        const normalizedCode = String(rawCode).trim().toUpperCase();

        if (!normalizedCode) {
            return res.status(400).json({ message: "Coupon code is required." });
        }

        const coupon = await Coupon.findOne({ code: normalizedCode, isActive: true }).lean();

        if (!coupon) {
            return res.status(404).json({ message: "Invalid or inactive coupon code." });
        }

        return res.json({
            code: coupon.code,
            discountPercentage: coupon.discountPercentage,
            discountRate: coupon.discountPercentage / 100,
            message: "Coupon applied successfully.",
        });
    } catch (error) {
        return res.status(500).json({ message: "Failed to validate coupon.", error: error.message });
    }
};

module.exports = {
    validateCoupon,
};