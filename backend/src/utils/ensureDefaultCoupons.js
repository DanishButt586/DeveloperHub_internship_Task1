const Coupon = require("../models/Coupon");

const defaultCoupons = [
    { code: "233606DA", discountPercentage: 50 },
    { code: "233544SA", discountPercentage: 35 },
];

const ensureDefaultCoupons = async () => {
    for (const coupon of defaultCoupons) {
        await Coupon.updateOne(
            { code: coupon.code },
            {
                $set: {
                    discountPercentage: coupon.discountPercentage,
                    isActive: true,
                },
            },
            { upsert: true }
        );
    }

    return defaultCoupons.length;
};

module.exports = ensureDefaultCoupons;