import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Consolidated = () => {
  const { t, i18n } = useTranslation();

  const pageTitle = `${t("Yig'ma yuklar va Avtomobil tashish")} | VIA Logistic`;
  const pageDescription = t("Yig'ma yuklarni O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida ishonchli yetkazib berish. Shuningdek, 21 tonnagacha bo'lgan yuklarni avtomobil transporti orqali Yevropa, Turkiya va boshqa davlatlarga yetkazib berish xizmatlari.");
  const pageKeywords = "Yig'ma yuk, Avtomobil tashish, Yuk yetkazib berish, O'zbekiston-Rossiya, WT Logistic, Xizmatlar";

  return (
    <div id="services" className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={i18n.language} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.viacargo.uz" />
        <meta property="og:image" content="https://www.wtlogistic.uz/assets/About-left-bg-D-sG5c5Z.png" />
      </Helmet>

      <div className="about-image w-full md:w-1/2 mb-4 md:mb-0 mt-12 md:mt-0">
        <img
          src="https://www.wtlogistic.uz/assets/About-left-bg-D-sG5c5Z.png"
          alt={t('Yig\'ma yuklarni yetkazib berish')}
        />
      </div>
      <div className="about-text md:w-1/2 md:pl-8 pt-4 md:pt-0 p-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Xizmatlar')}</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{t("Yig'ma yuklarni yetkazib berish")}</h3>
          <p className="text-lg text-gray-600 mb-3">
            {t("Kichik yuklar va dogruzkalar uchun maxsus xizmat. O'zbekiston, Rossiya va Qozog'iston yo'nalishlarida tezkor va ishonchli yetkazib berish.")}
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>{t("Yuk og'irligi: 1 kg dan 10 tonnagacha")}</li>
            <li>{t("Asosiy yo'nalishlar: O'zbekiston-Rossiya, O'zbekiston-Qozog'iston va teskari yo'nalishlar")}</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{t("Avtomobil yuk tashish")}</h3>
          <p className="text-lg text-gray-600 mb-3">
            {t("Katta yuklar uchun maxsus transport xizmati. O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa bo'ylab yetkazib berish.")}
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>{t("Yuk og'irligi: 10 tonnadan 21 tonnagacha")}</li>
            <li>{t("Yo'nalishlar: O'zbekiston, Rossiya, Qozog'iston, Turkiya va Yevropa")}</li>
          </ul>
        </div>

        <div className="border-t-2 border-blue-600 my-4"></div>

        <p className="text-lg text-gray-600">
          {t("Bu tashishlar turli sohalarning ishlashini ta'minlashda muhim rol o'ynaydi va milliy iqtisodiyotning barqarorligini ta'minlaydi. Biz har")}
        </p>
      </div>
    </div>
  );
};

export default Consolidated;
