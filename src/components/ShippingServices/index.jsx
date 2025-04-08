import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../ContactModal';

export default function ShippingServices() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const services = [
        {
            title: t('skills.services.regionalDelivery.title'),
            description: t('skills.services.regionalDelivery.description'),
            image: 'https://www.wtlogistic.uz/assets/regional-truck-Ccc1ZLwb.png',
        },
        {
            title: t('skills.services.turkeyDelivery.title'),
            description: t('skills.services.turkeyDelivery.description'),
            image: 'https://www.wtlogistic.uz/assets/turkey-truck-BAXxRWCJ.jpg',
        },
        {
            title: t('skills.services.europeDelivery.title'),
            description: t('skills.services.europeDelivery.description'),
            image: 'https://www.wtlogistic.uz/assets/europa-truck-DSyMklPq.webp',
        },
        {
            title: t('skills.services.russiaDelivery.title'),
            description: t('skills.services.russiaDelivery.description'),
            image: 'https://www.wtlogistic.uz/assets/russia-truck-Dy4GX_At.webp',
        },
    ];

    return (
        <>
            <div className="fourInfoSwiper container py-5 px-4">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="swiper"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="md:w-[400px] md:h-[640px] swiper-card relative p-4 md:p-6 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-t from-gray-800 via-gray-600 to-gray-400 text-white">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl text-center mt-2 md:text-4xl xl:h-[100px] font-extrabold mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <div className="relative w-full h-40 md:h-64 mb-6 overflow-hidden rounded-xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-xl transform hover:scale-110 transition-all duration-500 ease-in-out"
                                        />
                                    </div>
                                    <p className="text-lg mb-6 text-center md:text-left xl:h-[110px] text-opacity-90">
                                        {service.description}
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <button
                                            onClick={openModal}
                                            className="relative mx-auto md:mx-0 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg shadow-inner shadow-blue-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900 opacity-30 rounded-lg transition-all duration-300"></span>
                                            <span className="relative">
                                                {t('skills.services.orderButton')}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 hover:opacity-50 transition-opacity duration-300"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
        </>
    );
}
