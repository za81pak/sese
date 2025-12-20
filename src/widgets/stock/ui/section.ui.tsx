'use client';

import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import AppointmentModal from '../../../app/components/AppointmentModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const StockSlider = () => {
    const swiperRef = useRef<string>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            id: 1,
            title: "Бандажирование желудка",
            description: "Хирургическая методика для уменьшения объема желудка",
            price: "от 215 000 ₽",
        },
        {
            id: 2,
            title: "Рукавная гастропластика",
            description: "Удаление части желудка для создания длинного узкого рукава",
            price: "от 255 000 ₽",
        },
        {
            id: 3,
            title: "Шунтирование желудка",
            description: "Создание маленького желудочного мешка и обход части кишечника",
            price: "от 255 000 ₽",
        },
        {
            id: 4,
            title: "Внутрижелудочное",
            description: "Нехирургический механизм объема желудка",
            price: "от 140 000 ₽",
        }
    ];

    return (
        <section id="prices" className="mx-auto px-16 relative w-full py-16 bg-gradient-to-b from-white to-gray-50">
            {/* Контейнер с такими же отступами как у хедера */}
            <div className="mx-auto px-4 sm:px-6 lg:px-32">
                {/* Заголовок секции */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                        УСЛУГИ И ЦЕНЫ
                    </h2>
                </div>

                {/* Контейнер слайдера */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop={true}
                        watchSlidesProgress={true}
                        slideVisibleClass="swiper-slide-visible"
                        // Настройки автопрокрутки
                        autoplay={{
                            delay: 3000, // 3 секунды между слайдами
                            disableOnInteraction: false, // продолжать автопрокрутку после взаимодействия
                            pauseOnMouseEnter: true, // пауза при наведении мыши
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3, // Исправлена опечатка (было 3.,)
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="bg-gray-100 rounded-2xl p-6 h-full min-h-[280px] flex flex-col">
                                    {/* Заголовок услуги */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Описание */}
                                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Цена и кнопка - цена слева, кнопка справа */}
                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        <div className="text-xl font-bold text-red-600">
                                            {service.price}
                                        </div>
                                        <button onClick={() => setIsModalOpen(true)} className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap text-sm md:text-base">
                                            Записаться
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кастомные стрелки навигации */}
                    <button
                        ref={prevRef}
                        onClick={() => swiperRef.current?.slidePrev()}
                        className=" absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full text-red-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        style={{ left: '-10px' }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        ref={nextRef}

                        onClick={() => swiperRef.current?.slideNext()}
                        className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full text-red-600 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        style={{ right: '-10px' }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Глобальные стили для Swiper */}
                <style jsx global>{`
          /* Основные стили Swiper */
          .swiper {
            overflow: hidden;
            padding: 0;
            margin: 0;
          }
          
          .swiper-wrapper {
            display: flex;
            align-items: stretch;
          }
          
          .swiper-slide {
            height: auto;
            display: flex;
            opacity: 0.5;
            transition: opacity 0.3s ease;
          }
          
          /* Видимые слайды */
          .swiper-slide-visible {
            opacity: 1;
          }
          
          /* Скрытые слайды (те, что видны из-за loop) */
          .swiper-slide-hidden {
            opacity: 0;
            visibility: hidden;
          }
          
          /* Скрываем стандартные кнопки навигации Swiper */
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          
          /* Убедимся, что контейнер скрывает переполнение */
          .swiper-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          
          /* Контейнер для позиционирования стрелок */
          .relative {
            position: relative;
          }
          
          /* Делаем кнопки поверх слайдов */
          .absolute {
            position: absolute;
            z-index: 10;
          }
        `}</style>
                <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            </div>
        </section>
    );
};

export default StockSlider;