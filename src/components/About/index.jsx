import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-68px)] bg-transparent py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start bg-white rounded-2xl p-10">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('Biz haqimizda')}
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              {t(
                "Yuk tashish bozorida 5 yildan ortiq faoliyat yuritayotgan dinamik rivojlanayotgan kompaniya. Bizning yo'nalishimiz - Yevropa, Rossiya, Turkiya va MDH mamlakatlarida avtomobil transportida yuk tashish."
              )}
            </p>

            <div className="my-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {t('Bizning afzalliklarimiz')}
              </h2>
              <ul className="list-none pl-0 mb-4">
                {[
                  "1 tonnadan 22 tonnagacha yuk mashinalari.",
                  "Haqiqatan ham dolzarb tariflar. Har qanday murakkablikdagi yuklarni tashish va ekspeditsiya qilish.",
                  "Yuklash/tushirish paytida maslahat yordami.",
                  "Bojxona brokeri yordami.",
                  "Yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan ishlaymiz.",
                  "Har qanday to'lov shakli.",
                ].map((text, i) => (
                  <li key={i} className="relative pl-10 mb-4 text-lg text-gray-600">
                    <span className="absolute left-0 top-1 text-[#2563eb] font-bold">✓</span>
                    {t(text)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600 mb-4">
                {t(
                  "Tranzit yetkazib berish (konsolidatsiyalangan tashish) har doim tejamkorlikdir. Mijoz butun mashinaning yurishi uchun emas, balki faqat bir tomonga yetkazib berish uchun to'laydi. Yetkazib berish narxining -30%."
                )}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {t(
                  "Shu bilan birga, yirik transport kompaniyasining afzalliklari saqlanib qoladi: ishonchli transport, tajribali haydovchilar, sinovdan o'tgan yo'nalishlar va mulkingizning kafolatlangan xavfsizligi."
                )}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {t("Shoshilinch buyurtmalar bo'lsa ham, doimo bo'sh joyi bo'lgan transport mavjud.")}
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600 mb-3">
                {t(
                  "Yetkazib berishning barcha bosqichlarini nazorat qilib, biz yukning qayerda ekanligini, uning muddati va yakuniy nuqtaga yetib kelish sanasini aniq bilamiz."
                )}
              </p>
              <p className="text-lg text-gray-600 mb-3">
                {t("Biz bozorda ishonchli hamkor sifatida obro' qozondik.")}
              </p>
              <p className="text-lg text-gray-600">{t("Bizga ishonishingiz mumkin.")}</p>
            </div>

            <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <p className="text-lg text-gray-600">
                {t(
                  "Aniqlik narxini bilish, ma'lum bir sanada yetkazib berish imkoniyatini aniqlash yoki paydo bo'lgan har qanday savollar bo'yicha maslahat olish uchun veb-saytda so'rov qoldiring yoki shunchaki qo'ng'iroq qiling."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
