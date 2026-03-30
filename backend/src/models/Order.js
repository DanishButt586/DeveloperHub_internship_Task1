const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        qty: {
            type: Number,
            required: true,
            min: 1,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: false }
);

const shippingAddressSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, trim: true },
        address: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        postalCode: { type: String, required: true, trim: true },
        country: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        items: {
            type: [orderItemSchema],
            required: true,
            validate: {
                validator: (val) => Array.isArray(val) && val.length > 0,
                message: "Order must contain at least one item.",
            },
        },
        totalPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        shippingAddress: {
            type: shippingAddressSchema,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: "pending",
            enum: ["pending", "paid", "processing", "shipped", "delivered", "cancelled"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);
