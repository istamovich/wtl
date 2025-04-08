import React from 'react';
import { useTranslation } from 'react-i18next';
import Advantage1 from '../../assets/advantage1.png';
import Advantage2 from '../../assets/advantage2.png';
import Advantage3 from '../../assets/advantage3.png';

const Advantages = () => {
    const { t } = useTranslation();

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 flex flex-col md:flex-row items-center justify-center gap-2">
                        <span className="text-blue-500">{t("Bizning yetkazib berish")}</span>
                        <span className="text-black">{t("Sizning afzalligingiz")}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t("Kompaniyaning asosiy maqsadi")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8 group">
                            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-2 rounded-full bg-gray-50"></div>
                                <img src={Advantage1} alt="" className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10" />
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-center max-w-[280px]">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{t("2020 yildan tajriba")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("2020 yildan beri avtomobil yuk tashish")}</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8 group">
                            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-2 rounded-full bg-gray-50"></div>
                                <img src={Advantage2} alt="" className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10" />
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-center max-w-[280px]">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{t("Yuqori darajadagi xizmat")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("Professional xizmat va yondashuv")}</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-8 group">
                            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white shadow-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-2 rounded-full bg-gray-50"></div>
                                <img src={Advantage3} alt="" className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10" />
                            </div>
                            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full mb-1.5"></div>
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-center max-w-[280px]">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{t("Eng yuqori ball")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("WTL reytingida eng yuqori ball")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
