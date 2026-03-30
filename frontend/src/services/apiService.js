import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000,
});

export const fetchProducts = async (filters = "") => {
    let params = {};

    if (typeof filters === "string") {
        params = filters ? { keyword: filters } : {};
    } else {
        params = Object.fromEntries(
            Object.entries(filters || {}).filter(([, value]) => value !== undefined && value !== null && value !== "")
        );
    }

    const { data } = await api.get("/products", { params });
    return data;
};

export const fetchProductById = async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
};

export const createOrderRequest = async (orderPayload) => {
    const { data } = await api.post("/orders", orderPayload);
    return data;
};

export const fetchOrders = async () => {
    const { data } = await api.get("/orders");
    return data;
};

export const validateCouponRequest = async (code) => {
    const { data } = await api.post("/coupons/validate", { code });
    return data;
};

export default api;
