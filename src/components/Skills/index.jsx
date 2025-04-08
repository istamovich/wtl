import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: (
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-6xl text-gray-700 group-hover:text-gray-900"
                >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                </svg>
            ),
            title: t('skills.team_title'),
            description: t('skills.team_description'),
        },
        {
            icon: (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-6xl text-gray-700 group-hover:text-gray-900">
                    <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                </svg>
            ),
            title: t('skills.support_title'),
            description: t('skills.support_description'),
        },
        {
            icon: (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-6xl text-gray-700 group-hover:text-gray-900">
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                </svg>
            ),
            title: t('skills.network_title'),
            description: t('skills.network_description'),
        },
        {
            icon: (
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="text-6xl text-gray-700 group-hover:text-gray-900"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
            ),
            title: t('skills.security_title'),
            description: t('skills.security_description'),
        },
    ];

    return (
        <div className="w-full pt-10 mx-auto py-10 px-4 md:px-8 relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-wider">
                {t('skills.title')}
            </h2>
            <p className="sm:text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
                {t('skills.subtitle')}
            </p>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1920px] mx-auto px-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative bg-gradient-to-br w-[300px] h-[405px] from-gray-200 to-gray-300 p-6 md:p-8 rounded-3xl shadow-xl transform hover:-translate-y-4 transition-all duration-700 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 transform scale-110 group-hover:scale-125 transition-all duration-700 ease-out"></div>
                        <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-transparent border-2 border-white group-hover:bg-white shadow-lg rounded-full flex items-center justify-center mx-auto group-hover:rotate-45 group-hover:translate-y-6 transition-all duration-700">
                            {card.icon}
                        </div>
                        <h3 className="mt-5 md:mt-10 relative z-10 text-2xl md:text-3xl font-bold text-center text-gray-900 group-hover:text-white transition-colors duration-500">
                            {card.title}
                        </h3>
                        <p className="mt-2 md:mt-4 relative z-10 text-center text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
                            {card.description}
                        </p>
                        <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-50 blur-xl group-hover:opacity-75 group-hover:blur-3xl transition-all duration-800"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-50 blur-xl group-hover:opacity-75 group-hover:blur-3xl transition-all duration-800"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
