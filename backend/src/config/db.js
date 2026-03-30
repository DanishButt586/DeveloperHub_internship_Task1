const mongoose = require("mongoose");

let isConnecting = false;

const getFallbackMongoUri = (uri) => {
    if (!uri || !uri.startsWith("mongodb+srv://")) {
        return null;
    }

    const fallbackUri = uri.replace("mongodb+srv://", "mongodb://");
    return fallbackUri.includes("?")
        ? `${fallbackUri}&directConnection=true`
        : `${fallbackUri}?directConnection=true`;
};

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (isConnecting) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return connectDB();
    }

    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("MongoDB connection error: MONGO_URI is not defined.");
    }

    isConnecting = true;

    try {
        const conn = await mongoose.connect(mongoUri, {
            dbName: process.env.DB_NAME || "developerhub",
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
        isConnecting = false;
        return conn.connection;
    } catch (error) {
        const fallbackUri = process.env.MONGO_URI_FALLBACK || getFallbackMongoUri(mongoUri);
        const isSrvDnsError = /querySrv|ENOTFOUND|ECONNREFUSED/i.test(error.message || "");

        if (fallbackUri && isSrvDnsError) {
            try {
                console.warn("SRV lookup failed. Retrying with mongodb:// fallback URI...");

                const conn = await mongoose.connect(fallbackUri, {
                    dbName: process.env.DB_NAME || "developerhub",
                });

                console.log(`MongoDB connected (fallback): ${conn.connection.host}`);
                isConnecting = false;
                return conn.connection;
            } catch (fallbackError) {
                isConnecting = false;
                throw new Error(`MongoDB fallback connection error: ${fallbackError.message}`);
            }
        }

        isConnecting = false;
        throw new Error(`MongoDB connection error: ${error.message}`);
    }
};

module.exports = connectDB;
