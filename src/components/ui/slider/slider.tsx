'use client';


import React, { useRef } from 'react'; // Добавьте useRef сюда
import { Swiper as SwiperType } from 'swiper';
import { Swiper,  } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const PromotionsSlider = () => {

      return (
        <section className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <div className="text-center mb-12">
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12">
                    </Swiper>

                    {/* Кастомные кнопки навигации */}
                    <div className="swiper-button-prev !w-12 !h-12 !bg-white !shadow-lg !rounded-full !text-red-600 !left-0 after:!text-lg"></div>
                    <div className="swiper-button-next !w-12 !h-12 !bg-white !shadow-lg !rounded-full !text-red-600 !right-0 after:!text-lg"></div>
                </div>


            </div>
        </section>
    );
};

export default PromotionsSlider;