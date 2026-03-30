import React from "react";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import CheckoutPage from "../components/CheckoutPage";

export default function Cart() {
  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />
      <CheckoutPage />
      <FooterSection />
    </div>
  );
}
