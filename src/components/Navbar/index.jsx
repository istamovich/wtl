import { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from 'react-i18next'; 

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState("uz");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t, i18n } = useTranslation(); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang); 
    };

    return (
        <div className="bg-white">
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
                <div className="container py-2 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-[70px]">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 font-bold text-2xl">TFC</div>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="text-sm text-gray-600"> {t("Transport-ekspeditsiya kompaniyasi")}</div>
                        </div>

                        <nav className="hidden md:flex space-x-5">
                            {["Asosiy", "Biz haqimizda", "Xizmatlar", "Tashishlar", "Afzalliklar", "Aloqa"].map((item, index) => (
                                <button
                                    key={index}
                                    className="text-gray-700 relative group px-3 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1 hover:text-blue-600 whitespace-nowrap"
                                >
                                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                                        {t(item)} 
                                    </span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                                </button>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center space-x-4">
                            <button onClick={openModal} className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap ml-4">
                                {t("Biz bilan bog'laning")} 
                            </button>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => changeLanguage("uz")}
                                    className={`w-6 h-6 rounded-full overflow-hidden ${language === "uz" ? "ring-2 ring-blue-500" : ""}`}
                                >
                                    <img src="https://flagcdn.com/uz.svg" alt="Uzbek" className="w-full h-full object-cover" />
                                </button>
                                <button
                                    onClick={() => changeLanguage("ru")}
                                    className={`w-6 h-6 rounded-full overflow-hidden ${language === "ru" ? "ring-2 ring-blue-500" : ""}`}
                                >
                                    <img src="https://flagcdn.com/ru.svg" alt="Russian" className="w-full h-full object-cover" />
                                </button>
                                <button
                                    onClick={() => changeLanguage("en")}
                                    className={`w-6 h-6 rounded-full overflow-hidden ${language === "en" ? "ring-2 ring-blue-500" : ""}`}
                                >
                                    <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
                                </button>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X className="block h-6 w-6 z-50 mt-[-10px]" /> : <Menu className="block h-6 w-6 z-50" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-white border-l border-gray-200">
                        <div className="mt-3 px-4 flex space-x-3">
                            <button
                                onClick={() => changeLanguage("uz")}
                                className={`w-8 h-8 rounded-full overflow-hidden ${language === "uz" ? "ring-2 ring-blue-500" : ""}`}
                            >
                                <img src="https://flagcdn.com/uz.svg" alt="Uzbek" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage("ru")}
                                className={`w-8 h-8 rounded-full overflow-hidden ${language === "ru" ? "ring-2 ring-blue-500" : ""}`}
                            >
                                <img src="https://flagcdn.com/ru.svg" alt="Russian" className="w-full h-full object-cover" />
                            </button>
                            <button
                                onClick={() => changeLanguage("en")}
                                className={`w-8 h-8 rounded-full overflow-hidden ${language === "en" ? "ring-2 ring-blue-500" : ""}`}
                            >
                                <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
                            </button>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Asosiy")} 
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Biz haqimizda")}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Xizmatlar")}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Tashishlar")}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Afzalliklar")}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                            >
                                {t("Aloqa")}
                            </button>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center justify-between px-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                                    {t("Biz bilan bog'laning")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Navbar;
