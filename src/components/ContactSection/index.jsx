import React from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="relative pt-10 overflow-hidden p-8 bg-gradient-to-r from-blue-900 via-blue-700 to-black text-white"
        >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-0" />
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center z-0 opacity-60 blur-md"
                style={{ backgroundImage: "url('/assets/container-rPi3bGEU.png')" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-0" />
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                            {t("contact.title")}
                        </h2>
                        <p className="text-lg mb-8 opacity-90 animate__animated animate__fadeIn animate__delay-2s">
                            {t("contact.description")}
                        </p>
                        <div className="flex flex-col items-center lg:items-start space-y-6">
                            <a
                                href="https://www.google.com/maps?q=41.310020,69.330806"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-lg group hover:scale-105 transition-all animate__animated animate__fadeIn animate__delay-3s"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-4 text-3xl text-blue-300 group-hover:text-blue-400 transition-all"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="group-hover:text-blue-300 transition-all">
                                    {t("contact.address")}
                                </span>
                            </a>

                            <a
                                href="tel:+998953401950"
                                className="flex items-center text-lg group hover:scale-105 transition-all animate__animated animate__fadeIn animate__delay-4s"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-4 text-3xl text-blue-300 group-hover:text-blue-400 transition-all"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span className="group-hover:text-blue-300 transition-all">
                                    {t("contact.phone")}
                                </span>
                            </a>

                            <a
                                href="mailto:info@limsalogistics.com"
                                className="flex items-center text-lg group hover:scale-105 transition-all animate__animated animate__fadeIn animate__delay-5s"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-4 text-3xl text-blue-300 group-hover:text-blue-400 transition-all"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className="group-hover:text-blue-300 transition-all">
                                    {t("contact.email")}
                                </span>
                            </a>

                            <div className="flex items-center text-lg animate__animated animate__fadeIn animate__delay-6s">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-4 text-3xl text-blue-300"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>{t("contact.working_hours")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl animate__animated animate__fadeIn animate__delay-7s relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 0 }}
                        ></iframe>
                        <a
                            href="https://www.google.com/maps/place/LLC+WASCHMITTEL..."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open in Google Maps"
                            className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
