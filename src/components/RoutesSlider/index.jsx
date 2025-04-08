import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const routes = [
  { uz: "Yevropa → O'zbekiston", ru: "Европа → Узбекистан", en: "Europe → Uzbekistan" },
  { uz: "O'zbekiston → Xitoy", ru: "Узбекистан → Китай", en: "Uzbekistan → China" },
  { uz: "Xitoy → O'zbekiston", ru: "Китай → Узбекистан", en: "China → Uzbekistan" },
  { uz: "O'zbekiston → BAA", ru: "Узбекистан → ОАЭ", en: "Uzbekistan → UAE" },
  { uz: "BAA → O'zbekiston", ru: "ОАЭ → Узбекистан", en: "UAE → Uzbekistan" },
  { uz: "O'zbekiston → Rossiya", ru: "Узбекистан → Россия", en: "Uzbekistan → Russia" },
  { uz: "O'zbekiston → Turkiya", ru: "Узбекистан → Турция", en: "Uzbekistan → Turkey" },
  { uz: "O'zbekiston → Qozog'iston", ru: "Узбекистан → Казахстан", en: "Uzbekistan → Kazakhstan" },
  { uz: "O'zbekiston → Yevropa", ru: "Узбекистан → Европа", en: "Uzbekistan → Europe" },
  { uz: "Rossiya → O'zbekiston", ru: "Россия → Узбекистан", en: "Russia → Uzbekistan" },
  { uz: "Turkiya → O'zbekiston", ru: "Турция → Узбекистан", en: "Turkey → Uzbekistan" },
  { uz: "Qozog'iston → O'zbekiston", ru: "Казахстан → Узбекистан", en: "Kazakhstan → Uzbekistan" },
];

const RoutesSlider = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="routes-slider py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          {t("skills.routes.heading")}
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {routes.map((route, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg shadow-md py-4 text-center">
                <div className="text-lg font-semibold mb-2">{route[lang]}</div>
                <div className="text-sm text-gray-600">{t("skills.routes.description")}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoutesSlider;
