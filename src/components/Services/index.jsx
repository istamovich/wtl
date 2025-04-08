import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      imgSrc: "https://www.wtlogistic.uz/assets/uslug1-uPCUvYpj.svg",
      titleKey: "Avtomobil tashish",
      descriptionKey: "Yuklaringiz uchun ishonchli va samarali avtomobil tashish xizmatlarini taqdim etamiz"
    },
    {
      imgSrc: "https://www.wtlogistic.uz/assets/uslug2-BAjZgUcU.svg",
      titleKey: "Yuklar konsolidatsiyasi",
      descriptionKey: "Yetkazib berishni optimallashtirish uchun bir nechta kichik yuklar partiyasini birlashtirish"
    },
    {
      imgSrc: "https://www.wtlogistic.uz/assets/uslug3-DZ8f4Bw7.svg",
      titleKey: "Xitoydan yetkazib berish",
      descriptionKey: "Xitoydan yuklarni tez va ishonchli yetkazib berishni tashkil qilamiz"
    },
    {
      imgSrc: "https://www.wtlogistic.uz/assets/uslug4-DeQp_9La.svg",
      titleKey: "Qiyin joylarga yetkazish",
      descriptionKey: "Eng uzoq va qiyin hududlarga yetkazib berish xizmatini amalga oshiramiz"
    },
    {
      imgSrc: "https://www.wtlogistic.uz/assets/uslug5-BOhojed_.svg",
      titleKey: "Ombor xizmatlari",
      descriptionKey: "Yuklaringizni saqlash uchun zamonaviy ombor binolarini taqdim etamiz"
    }
  ];

  return (
    <div id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-blue-500">{t('Bizning')}</span>
            <span className="text-black">{t('Xizmatlar')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-6">
                <img
                  src={service.imgSrc}
                  alt={t(service.titleKey)}
                  className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] object-contain transition-colors duration-300"
                />
              </div>
              <div className="text-center max-w-[200px]">
                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
