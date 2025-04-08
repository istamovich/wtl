import React from "react";
import { useTranslation } from "react-i18next";

const TariffRequestSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chap tomondagi matn */}
          <div className="text-left max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {t("skills.tariffRequest.heading")}
            </h2>
            <p className="text-base text-gray-600 mb-3">
              {t("skills.tariffRequest.subheading")}
            </p>
            <p className="text-sm text-gray-500">
              {t("skills.tariffRequest.note")}
            </p>
          </div>

          {/* O'ng tomondagi ikonlar bloki */}
          <div className="w-full pb-4">
            <div className="grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-4 lg:gap-2">
              {/* 1 */}
              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif1-BWBNfWj8.svg"
                  alt={t("skills.tariffRequest.pickupLocation")}
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  {t("skills.tariffRequest.pickupLocation")}
                </span>
              </div>

              {/* 2 */}
              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif2-ChLu3YzJ.svg"
                  alt={t("skills.tariffRequest.dropoffLocation")}
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  {t("skills.tariffRequest.dropoffLocation")}
                </span>
              </div>

              {/* 3 */}
              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif3-Tk8rf8pH.svg"
                  alt={t("skills.tariffRequest.deliveryTime")}
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  {t("skills.tariffRequest.deliveryTime")}
                </span>
              </div>

              {/* 4 */}
              <div className="flex flex-col items-center w-full lg:w-28">
                <img
                  src="https://www.wtlogistic.uz/assets/tarif4-DRdlg-HS.svg"
                  alt={t("skills.tariffRequest.cargoParameters")}
                  className="w-24 h-24 md:w-20 md:h-20 object-contain mb-2"
                />
                <span className="text-xs md:text-sm text-gray-700 text-center">
                  {t("skills.tariffRequest.cargoParameters")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffRequestSection;
