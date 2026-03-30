const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");
const ensureDefaultCoupons = require("./utils/ensureDefaultCoupons");

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    const couponCount = await ensureDefaultCoupons();

    console.log(`Coupons ensured: ${couponCount}`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();
