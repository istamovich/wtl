import React, { useState } from 'react';
import heroImage from "../../assets/bg-hero.jpg";
import ContactModal from '../ContactModal';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t, i18n } = useTranslation(); // i18n hook
    const lang = i18n.language;

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t("Transport kompaniyasi - Tez va xavfsiz yetkazib berish")}</title>
                <meta name="description" content={t("Bizning transport kompaniyamiz yuklaringizni ishonchli va tez yetkazib berishni kafolatlaydi. Xizmatlarimizni ko‘rib chiqing.")} />
                <meta name="keywords" content={t("transport, ekspeditsiya, yuk tashish, yetkazib berish, VIA kompaniya")} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="VIA Transport" />
                <meta property="og:title" content={t("Transport kompaniyasi - Tez va xavfsiz yetkazib berish")} />
                <meta property="og:description" content={t("Bizning transport kompaniyamiz yuklaringizni ishonchli va tez yetkazib berishni kafolatlaydi. Xizmatlarimizni ko‘rib chiqing.")} />
                <meta property="og:image" content={heroImage} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={lang} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t("Transport kompaniyasi - Tez va xavfsiz yetkazib berish")} />
                <meta name="twitter:description" content={t("Yuklaringizni tez va xavfsiz yetkazamiz. Biz bilan aloqa qiling!")} />
                <meta name="twitter:image" content={heroImage} />
            </Helmet>

            <div id='home'
                className="flex justify-center items-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                    clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px calc(100% - 80px))',
                }}
            >
                <div className="container py-24 flex justify-between items-center w-full z-10">
                    <div className="left-content flex-1 text-left text-white p-10 bg-black bg-opacity-50 rounded-lg shadow-2xl transform scale-90 hover:scale-100 transition-all duration-500">
                        <h1 className="text-3xl md:text-7xl font-extrabold leading-tight mb-6 text-shadow-lg">
                            {t("Biz tez va xavfsiz yetkazib berishni kafolatlaymiz!")}
                        </h1>
                        <div className="line w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-8"></div>
                        <p className="text-2xl opacity-90 mb-10 max-w-2xl mx-auto text-shadow-lg">
                            {t("Bizning parkimiz o‘z sinfidagi eng yaxshi yuk mashinalaridan iborat bo‘lib, yuklaringizni qayerga bo‘lmasin tez, xavfsiz va o‘z vaqtida yetkazib beradi.")}
                        </p>
                        <button
                            onClick={openModal}
                            className="px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-xl rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
                        >
                            {t("Biz bilan boshlang")}
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default Hero;
