const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const products = require("./data/products");
const ensureDefaultCoupons = require("./utils/ensureDefaultCoupons");

dotenv.config();

const importData = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        const insertedProducts = await Product.insertMany(products);
        const couponCount = await ensureDefaultCoupons();

        console.log(`Seeder: products imported successfully (${insertedProducts.length} products)`);
        console.log(`Seeder: coupons ensured successfully (${couponCount} coupons)`);
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error(`Seeder import error: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await connectDB();
        await Product.deleteMany();

        console.log("Seeder: products destroyed successfully");
        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error(`Seeder destroy error: ${error.message}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
