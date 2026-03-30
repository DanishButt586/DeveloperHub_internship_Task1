const dotenv = require("dotenv");
const app = require("../src/app");
const connectDB = require("../src/config/db");
const ensureDefaultCoupons = require("../src/utils/ensureDefaultCoupons");

dotenv.config();

let initPromise;

const initialize = async () => {
    if (!initPromise) {
        initPromise = (async () => {
            await connectDB();
            await ensureDefaultCoupons();
        })().catch((error) => {
            initPromise = null;
            throw error;
        });
    }

    return initPromise;
};

module.exports = async (req, res) => {
    try {
        await initialize();
        return app(req, res);
    } catch (error) {
        console.error(`Backend init failed: ${error.message}`);
        return res.status(500).json({ message: "Backend initialization failed." });
    }
};