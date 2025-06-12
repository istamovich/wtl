import { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("uz");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const sections = [
    { label: "Asosiy", id: "home" },
    { label: "Biz haqimizda", id: "about" },
    { label: "Xizmatlar", id: "services" },
    { label: "Tashishlar", id: "transport" },
    { label: "Afzalliklar", id: "skills" },
    { label: "Aloqa", id: "contact" },
  ];

  return (
    <div className="bg-white">
      {/* Helmet SEO Head */}
      <Helmet>
        <html lang={language} />
        <title>VIA Cargo – {t("Tez va xavfsiz yuk tashish xizmati")}</title>
        <meta
          name="description"
          content={t("Biz tez va xavfsiz yetkazib berishni kafolatlaymiz! Yuklaringizni istalgan manzilga o'z vaqtida yetkazib beramiz.")}
        />
        <meta name="keywords" content="VIA Cargo, yuk tashish, transport, logistika, tez yetkazib berish" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="VIA Cargo – Tez va xavfsiz yetkazib berish" />
        <meta property="og:description" content="Yuklaringizni ishonchli va o‘z vaqtida yetkazib beramiz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viacargo.uz/" />
        <meta property="og:image" content="https://viacargo.uz/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VIA Cargo – Tez va xavfsiz yetkazib berish" />
        <meta name="twitter:description" content="Yuklaringizni qayerga bo‘lmasin tez va xavfsiz yetkazamiz." />
        <meta name="twitter:image" content="https://viacargo.uz/preview.jpg" />
        <link rel="canonical" href="https://viacargo.uz/" />
      </Helmet>

      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="container py-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 font-bold text-2xl">VIA</div>
              <div className="h-8 w-px bg-gray-300" />
              <div className="text-sm text-gray-600">
                {t("Transport-ekspeditsiya kompaniyasi")}
              </div>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-5">
              {sections.map(({ label, id }, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-700 relative group px-3 py-2 rounded-lg font-medium tracking-wide transition-all duration-300 transform hover:scale-110 hover:translate-y-1 hover:text-blue-600 whitespace-nowrap"
                >
                  <span className="relative z-10 group-hover:scale-105">
                    {t(label)}
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </button>
              ))}
            </nav>

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={openModal}
                className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap ml-4"
              >
                {t("Biz bilan bog'laning")}
              </button>
              {/* Language switcher */}
              <div className="flex space-x-2">
                {["uz", "ru", "en"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`w-6 h-6 rounded-full overflow-hidden ${
                      language === lang ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/${lang === "en" ? "us" : lang}.svg`}
                      alt={lang.toUpperCase()}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-white border-l border-gray-200">
            <div className="mt-3 px-4 flex space-x-3">
              {["uz", "ru", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`w-8 h-8 rounded-full overflow-hidden ${
                    language === lang ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/${lang === "en" ? "us" : lang}.svg`}
                    alt={lang.toUpperCase()}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map(({ label, id }, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(id)}
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-700 hover:bg-gray-50"
                >
                  {t(label)}
                </button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 px-4">
              <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full"
              >
                {t("Biz bilan bog'laning")}
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
