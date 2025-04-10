import React, { useState } from "react";
import Eurofura from "../../assets/eurofura.png";
import Tonar from "../../assets/tonar.png";
import OrtaHajmli from "../../assets/orta-hajmli.png";
import { useTranslation } from 'react-i18next';

const data = {
    Eurofura: {
        title: "Eurofura",
        image: Eurofura,
        description: {
            uz: "Tekis pollik standart tentli yarim tirkama",
            ru: "Полуприцеп с плоским полом и стандартным тентом",
            en: "Flat-floor standard curtain semi-trailer",
        },
        sizes: ["82 m³ (EURO)", "86 m³ (EURO)", "90 m³ (EURO)", "92 m³ (EURO)", "96 m³ (JUMBO)"],
        specs: [
            { key: "length", value: "13.6 м" },
            { key: "width", value: "2.45 м" },
            { key: "height", value: "2.45 м" },
            { key: "capacity", value: "20-24 тонн" },
        ],
    },
    Tonar: {
        title: "Tonar",
        image: Tonar,
        description: {
            uz: "Tekis pollik va baland tentli yarim tirkama",
            ru: "Полуприцеп с плоским полом и высоким тентом",
            en: "Flat-floor high curtain semi-trailer",
        },
        sizes: ["100 m³", "110 m³", "120 m³ (MEGA)"],
        specs: [
            { key: "length", value: "13.6 м" },
            { key: "width", value: "2.45 м" },
            { key: "height", value: "3.0 м" },
            { key: "capacity", value: "20-25 тонн" },
        ],
    },
    OrtaHajmli: {
        title: "O'rta hajmli",
        image: OrtaHajmli,
        description: {
            uz: "Kichik va o‘rta hajmdagi yuklar uchun mos variant",
            ru: "Подходит для небольших и средних грузов",
            en: "Suitable for small and medium-sized loads",
        },
        sizes: ["40 m³", "50 m³", "60 m³"],
        specs: [
            { key: "length", value: "7.0 м" },
            { key: "width", value: "2.2 м" },
            { key: "height", value: "2.3 м" },
            { key: "capacity", value: "5-10 тонн" },
        ],
    },
};

const TariffsSection = () => {
    const { t, i18n } = useTranslation();
    const [selected, setSelected] = useState("Eurofura");
    const [selectedSize, setSelectedSize] = useState(data["Eurofura"].sizes[0]);

    const current = data[selected];
    const currentLang = i18n.language || 'uz';

    // Size tanlovlari har safar tirkama o'zgarganda reset bo'lishi uchun
    React.useEffect(() => {
        setSelectedSize(data[selected].sizes[0]);
    }, [selected]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div id="tariffs" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    <span className="text-blue-500">{t("skills.TariffsSection.title")}</span>{" "}
                    <span className="text-black">{current.title}</span>
                </h2>
                <p className="text-center text-lg mb-4">{current.description[currentLang]}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {Object.keys(data).map((key) => (
                        <button
                            key={key}
                            onClick={() => setSelected(key)}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${selected === key
                                ? "bg-blue-600 text-white scale-105 shadow-lg"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {data[key].title}
                        </button>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                            <img
                                src={current.image}
                                alt={current.title}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3">{t("skills.TariffsSection.chooseSize")}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {current.sizes.map((size, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                                selectedSize === size
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-3 text-gray-600 text-sm italic">
                                    {current.description[currentLang]}
                                </p>
                            </div>

                            <div className="space-y-2">
                                {current.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">{t(`skills.TariffsSection.specs.${spec.key}`)}:</span>
                                        <span className="font-semibold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contactForm"
                                className="mt-6 block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                {t("skills.TariffsSection.orderNow")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TariffsSection;
