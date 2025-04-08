import React, { useState } from "react";
import axios from "axios";
import { MapPin, Pencil, Package, Phone } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        from: "",
        to: "",
        cargoName: "",
        phone: "",
    });

    const token = '7625011671:AAGPzwTe7zd8BGnbhPLOOGJVcwQOaRlOYCI';
    const chat_id = 5445767761;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = `
✉️ New Cargo Order:
📍 From: ${formData.from}
📍 To: ${formData.to}
📦 Cargo: ${formData.cargoName}
📞 Phone: ${formData.phone}
`;

        try {
            await axios.post(url, {
                chat_id,
                text: message,
                parse_mode: "HTML",
            });
            toast.success(t("success"), { position: "top-right" });
            setFormData({ from: "", to: "", cargoName: "", phone: "" });
        } catch (error) {
            console.error("Telegram error:", error);
            toast.error(t("error"), { position: "top-right" });
        }
    };

    return (
        <div
            id="contactForm"
            className="relative bg-cover bg-center py-20 flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://www.wtlogistic.uz/assets/contact-bg-C_5P166-.jpg')",
            }}
        >
            <ToastContainer />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-12 max-w-2xl w-full text-white">
                <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
                    {t("contactTitle")}
                </h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <Input icon={<MapPin />} name="from" value={formData.from} onChange={handleChange} placeholder={t("from")} />
                    <Input icon={<Pencil />} name="to" value={formData.to} onChange={handleChange} placeholder={t("to")} />
                    <Input icon={<Package />} name="cargoName" value={formData.cargoName} onChange={handleChange} placeholder={t("cargoName")} />
                    <Input icon={<Phone />} name="phone" value={formData.phone} onChange={handleChange} placeholder={t("phone")} />
                    <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded transition duration-300"
                    >
                        {t("send")}
                    </button>
                </form>
            </div>
        </div>
    );
};

const Input = ({ icon, name, value, onChange, placeholder }) => (
    <div className="flex items-center border-b border-white/50 pb-2">
        <div className="text-blue-500 mr-4 text-2xl">{icon}</div>
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
            className="w-full px-2 py-3 bg-transparent text-white placeholder-gray-300 text-lg focus:outline-none"
        />
    </div>
);

export default ContactForm;
