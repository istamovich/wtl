import React from 'react';
import { useTranslation } from 'react-i18next';

const ProcessSteps = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: 1,
            img: "https://www.wtlogistic.uz/assets/paryadok1-DKFH0iH2.png",
            alt: t('steps.step1Alt'),
            title: t('steps.step1Title'),
            subtitle: "+998 95 340 19 50",
        },
        {
            number: 2,
            img: "https://www.wtlogistic.uz/assets/paryadok2-KfsWMrrP.png",
            alt: t('steps.step2Alt'),
            title: t('steps.step2Title'),
        },
        {
            number: 3,
            img: "https://www.wtlogistic.uz/assets/paryadok3-DljcrCTO.png",
            alt: t('steps.step3Alt'),
            title: t('steps.step3Title'),
        },
        {
            number: 4,
            img: "https://www.wtlogistic.uz/assets/paryadok4-DK5E5G6N.png",
            alt: t('steps.step4Alt'),
            title: t('steps.step4Title'),
        },
    ];

    return (
        <section id='transport' className="pb-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 tracking-tight">
                        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">{t('process.title1')}</span>{' '}
                        <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{t('process.title2')}</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-items-center">
                    {steps.map((step) => (
                        <div key={step.number} className="relative w-full max-w-[250px] flex flex-col items-center">
                            <div className="w-full h-48 flex items-center justify-center p-6 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                                <img src={step.img} alt={step.alt} className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="text-4xl font-bold text-red-500 mb-4">{step.number}</div>
                            <h3 className="mt-4 text-center text-gray-800 font-medium">{step.title}</h3>
                            {step.subtitle && (
                                <p className="mt-1 text-center text-gray-600">{step.subtitle}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
