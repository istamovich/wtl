import React from "react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t("stats.market_experience.title"),
      description: t("stats.market_experience.description"),
    },
    {
      title: t("stats.reviews.title"),
      description: t("stats.reviews.description"),
    },
    {
      title: t("stats.partners.title"),
      description: t("stats.partners.description"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-item bg-white relative p-8 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl group"
          >
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
              {item.title}
            </h3>
            <p className="text-xl mt-4 text-gray-800">{item.description}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
