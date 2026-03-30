import React, { useEffect, useState } from "react";
import { CheckCircle2, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { useShopContext } from "../ShopContext";
import { fetchOrders } from "../services/apiService";

const tabs = ["profile", "login", "register"];

export default function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [authError, setAuthError] = useState("");
  const [rememberSession, setRememberSession] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [orderCount, setOrderCount] = useState(0);
  const [loadingOrders, setLoadingOrders] = useState(true);

  const activeTab = tabs.includes(searchParams.get("tab")) ? searchParams.get("tab") : "profile";

  const {
    cartItemCount,
    cartTotal,
    languageCurrency,
    shipTo,
    lastOrder,
  } = useShopContext();

  useEffect(() => {
    const loadOrders = async () => {
      setLoadingOrders(true);
      try {
        const data = await fetchOrders();
        setOrderCount(data.length);
      } catch {
        setOrderCount(0);
      } finally {
        setLoadingOrders(false);
      }
    };

    loadOrders();
  }, []);

  const handleTabChange = (tab) => {
    setSearchParams(tab === "profile" ? {} : { tab });
    setStatusMessage("");
    setAuthError("");
  };

  const handleAuthSubmit = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedName = fullName.trim();

    setAuthError("");

    if (!normalizedEmail || !/\S+@\S+\.\S+/.test(normalizedEmail)) {
      setAuthError("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      setAuthError("Password must be at least 6 characters long.");
      return;
    }

    if (activeTab === "register") {
      if (!normalizedName) {
        setAuthError("Please enter your full name.");
        return;
      }

      if (!acceptTerms) {
        setAuthError("Please accept the terms and privacy policy.");
        return;
      }
    }

    const displayName = normalizedName || normalizedEmail.split("@")[0] || "User";
    const successMessage =
      activeTab === "register"
        ? `${displayName} registered successfully.`
        : `Welcome back, ${displayName}.`;

    setStatusMessage(successMessage);
    setEmail(normalizedEmail);
    setPassword("");

    if (activeTab === "register") {
      setFullName("");
      setAcceptTerms(false);
    }
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">Profile & Account</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${
                  activeTab === tab
                    ? "bg-[#0D6EFD] text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {(activeTab === "login" || activeTab === "register") && (
            <div className="mb-6 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-6 md:p-8 bg-gradient-to-br from-[#0D6EFD] via-[#0A58CA] to-[#003B8E] text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-100">Secure account</p>
                  <h2 className="text-2xl font-semibold mt-3 leading-tight">
                    {activeTab === "register" ? "Create your professional account" : "Welcome back to your dashboard"}
                  </h2>
                  <p className="text-sm text-blue-100 mt-3 leading-6">
                    Access your saved cart, order tracking, and account settings from one secure place.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-blue-50">
                      <CheckCircle2 size={16} />
                      Faster checkout and order updates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-50">
                      <CheckCircle2 size={16} />
                      Personalized language and shipping preferences
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-50">
                      <CheckCircle2 size={16} />
                      Protected account sessions
                    </div>
                  </div>
                </div>

                <form onSubmit={handleAuthSubmit} className="p-6 md:p-8 bg-[#FCFDFE]">
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {activeTab === "register" ? "Sign up" : "Login"}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {activeTab === "register"
                        ? "Create an account to manage orders and preferences."
                        : "Use your account details to continue."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {activeTab === "register" && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1.5">Full name</label>
                        <div className="relative">
                          <UserRound size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1.5">Email address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="name@company.com"
                          type="email"
                          className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1.5">Password</label>
                      <div className="relative">
                        <LockKeyhole size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Minimum 6 characters"
                          type="password"
                          className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                      </div>
                    </div>
                  </div>

                  {activeTab === "register" ? (
                    <label className="mt-4 inline-flex items-start gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(event) => setAcceptTerms(event.target.checked)}
                        className="mt-0.5"
                      />
                      I agree to the terms of service and privacy policy.
                    </label>
                  ) : (
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={rememberSession}
                          onChange={(event) => setRememberSession(event.target.checked)}
                        />
                        Keep me signed in
                      </label>
                      <span className="text-[#0D6EFD] cursor-pointer hover:underline">Forgot password?</span>
                    </div>
                  )}

                  {authError && (
                    <p className="text-sm text-red-600 mt-4 rounded-md bg-red-50 border border-red-100 px-3 py-2">{authError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-5 bg-[#0D6EFD] text-white rounded-md py-2.5 text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    {activeTab === "register" ? "Create account" : "Login"}
                  </button>

                  <div className="mt-4 p-3 rounded-md bg-blue-50 text-blue-700 text-sm flex items-center gap-2">
                    <ShieldCheck size={16} />
                    Your account details stay protected with secure sessions.
                  </div>

                  <p className="text-sm text-gray-600 mt-4 text-center">
                    {activeTab === "register" ? "Already have an account?" : "New here?"}
                    <button
                      type="button"
                      onClick={() => handleTabChange(activeTab === "register" ? "login" : "register")}
                      className="text-[#0D6EFD] font-medium ml-1 hover:underline"
                    >
                      {activeTab === "register" ? "Login" : "Create account"}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          )}

          {statusMessage && <p className="text-sm text-green-600 mb-6">{statusMessage}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-500">Cart Items</p>
              <p className="text-xl font-semibold text-gray-900">{cartItemCount}</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-500">Cart Total</p>
              <p className="text-xl font-semibold text-gray-900">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-500">Orders</p>
              <p className="text-xl font-semibold text-gray-900">{loadingOrders ? "..." : orderCount}</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-500">Locale</p>
              <p className="text-xl font-semibold text-gray-900">{languageCurrency.language}, {languageCurrency.currency}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-sm text-gray-700">
            <p>Ship To: {shipTo.emoji} {shipTo.label}</p>
            {lastOrder && <p className="mt-2">Last order ID: {lastOrder._id}</p>}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
