import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutLeft from '../../assets/About-left.png';

const Consolidated = () => {
  const { t } = useTranslation();

  return (
    <div id="services" className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="about-image w-full md:w-1/2 mb-4 md:mb-0 mt-12 md:mt-0">
        <img
          src={AboutLeft}
          alt="About"
          className="w-[50%] md:w-[90%] h-auto object-contain mx-auto"
          style={{ transform: 'scale(0.881111)', transition: 'transform 0.1s ease-out' }}
        />
      </div>
      <div className="about-text md:w-1/2 md:pl-8 pt-4 md:pt-0 p-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Xizmatlar')}</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('Yig\'ma yuklarni yetkazib berish')}</h3>
          <p className="text-lg text-gray-600 mb-3">
            {t('Kichik yuklar va dogruzkalar uchun maxsus xizmat. O\'zbekiston, Rossiya va Qozog\'iston yo\'nalishlarida tezkor va ishonchli yetkazib berish.')}
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>{t('Yuk og\'irligi: 1 kg dan 10 tonnagacha')}</li>
            <li>{t('Asosiy yo\'nalishlar: O\'zbekiston-Rossiya, O\'zbekiston-Qozog\'iston va teskari yo\'nalishlar')}</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('Avtomobil yuk tashish')}</h3>
          <p className="text-lg text-gray-600 mb-3">
            {t('Katta yuklar uchun maxsus transport xizmati. O\'zbekiston, Rossiya, Qozog\'iston, Turkiya va Yevropa bo\'ylab yetkazib berish.')}
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>{t('Yuk og\'irligi: 10 tonnadan 21 tonnagacha')}</li>
            <li>{t('Yo\'nalishlar: O\'zbekiston, Rossiya, Qozog\'iston, Turkiya va Yevropa')}</li>
          </ul>
        </div>
        <div className="border-t-2 border-blue-600 my-4"></div>
        <p className="text-lg text-gray-600">
          {t('Bu tashishlar turli sohalarning ishlashini ta\'minlashda muhim rol o\'ynaydi va milliy iqtisodiyotning barqarorligini ta\'minlaydi. Biz har')}
          <br />
          {t('qanday yuklarni "eshikdan eshikgacha" eng qisqa muddatda va eng yaxshi sifat bilan yetkazib beramiz. Uskunalar yetkazib berish, qurilish va yo\'l maxsus texnikasi, qurilish materiallari, mebel, maishiy texnika, ehtiyot qismlar va hatto samolyot - bizning ko\'p yillik tajribamiz tashishni tashkil etishda keng imkoniyatlar beradi.')}
        </p>
      </div>
    </div>
  );
};

export default Consolidated;
