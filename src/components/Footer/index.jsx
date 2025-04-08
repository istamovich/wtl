import {
  FaHome,
  FaInfoCircle,
  FaStar,
  FaConciergeBell,
  FaTruck,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1f1f1f] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="bg-[#3a3a3a] rounded-xl p-6 shadow-md">
          <h4 className="flex items-center text-lg font-semibold text-blue-500 mb-4">
            <FaHome className="mr-2" /> {t("footer.home")}
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center gap-2">
              <FaInfoCircle className="text-blue-500" /> <a href="#about">{t("footer.about")}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaStar className="text-blue-500" /> <a href="#skills">{t("footer.advantages")}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaConciergeBell className="text-blue-500" /> <a href="#services">{t("footer.services")}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTruck className="text-blue-500" /> <a href="#tariffs">{t("footer.transportation")}</a>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <FaPhone className="text-blue-500" /> {t("footer.contact_us")}
            </li>
          </ul>
        </div>

        <div className="bg-[#3a3a3a] rounded-xl p-6 shadow-md">
          <h4 className="flex items-center text-lg font-semibold text-blue-500 mb-4">
            <FaPhone className="mr-2" /> {t("footer.contacts")}
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" /> <a href="tel:+998953401950">+998 95 340 19 50</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> <a href="mailto:waschmittelcompany@mail.ru">waschmittelcompany@mail.ru</a>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-blue-500" /> {t("footer.working_hours")}
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> {t("footer.address")}
            </li>
          </ul>

          <div className="flex gap-4 text-2xl text-white mt-6">
            <a href="#" className="hover:text-blue-400">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} {t("footer.all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
