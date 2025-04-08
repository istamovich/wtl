import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOKEN = "7625011671:AAGPzwTe7zd8BGnbhPLOOGJVcwQOaRlOYCI";
const CHAT_ID = 5445767761;
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

import PropTypes from "prop-types";

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        direction: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.phone || !formData.email || !formData.direction) {
            toast.warning("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        const message = `
📩 *Yangi Murojaat*
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
📧 Email: ${formData.email}
🚚 Yo‘nalish: ${formData.direction}
    `;

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "Markdown",
                }),
            });

            if (response.ok) {
                toast.success("Xabaringiz yuborildi!");
                setFormData({ name: "", phone: "", email: "", direction: "" });
                onClose();
            } else {
                toast.error("Xabar yuborishda xatolik yuz berdi.");
            }
        } catch (error) {
            toast.error("Tarmoqda xatolik. Internet aloqasini tekshiring.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-[#0d1224] text-white p-6 rounded-xl w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4">
                    <X className="text-white" />
                </button>
                <h2 className="text-2xl font-bold mb-5">Biz bilan bog'laning</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ismingiz"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-[#1e253f] text-white placeholder-gray-400 outline-none"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Telefon raqamingiz"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-[#1e253f] text-white placeholder-gray-400 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Elektron pochtangiz"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-[#1e253f] text-white placeholder-gray-400 outline-none"
                    />
                    <input
                        type="text"
                        name="direction"
                        placeholder="Yuk yo'nalishi"
                        value={formData.direction}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-[#1e253f] text-white placeholder-gray-400 outline-none"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-white font-semibold mt-2 transition-all duration-300"
                    >
                        Yuborish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;

