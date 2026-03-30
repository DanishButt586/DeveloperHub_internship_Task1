import React from "react";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { useShopContext } from "../ShopContext";
import { localeOptions, shipToOptions } from "../data/siteConfig";

export default function SettingsPage() {
  const { languageCurrency, updateLanguageCurrency, shipTo, updateShipTo } = useShopContext();

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[900px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">Settings</h1>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 space-y-5">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Language & Currency</h2>
            <select
              value={`${languageCurrency.language}-${languageCurrency.currency}`}
              onChange={(event) => {
                const [language, currency] = event.target.value.split("-");
                const option = localeOptions.find((item) => item.language === language && item.currency === currency);
                if (option) {
                  updateLanguageCurrency({ language: option.language, currency: option.currency });
                }
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              {localeOptions.map((option) => (
                <option key={`${option.language}-${option.currency}`} value={`${option.language}-${option.currency}`}>
                  {option.label}
                </option>
              ))}
            </select>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Ship to</h2>
            <select
              value={shipTo.code}
              onChange={(event) => {
                const option = shipToOptions.find((item) => item.code === event.target.value);
                if (option) updateShipTo(option);
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              {shipToOptions.map((option) => (
                <option key={option.code} value={option.code}>{`${option.emoji} ${option.label}`}</option>
              ))}
            </select>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
