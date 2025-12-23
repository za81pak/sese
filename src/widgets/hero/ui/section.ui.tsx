"use client";

import React, { useState } from 'react';
import AppointmentModal from '../../../app/components/AppointmentModal';
import Image from 'next/image';
import hero from '../../../../public/statics/hero.png';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для звонка
    const handleCall = () => {
        window.location.href = 'tel:+78442202776';
    };

    return (
        <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] overflow-hidden">
            {/* Фоновое изображение - БЕЗ ОБРЕЗКИ */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero}
                    alt="Центр бариатрической хирургии"
                    fill
                    className="object-cover object-right md:object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
                {/* Затемнение фона для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
            </div>

            {/* Контент поверх изображения */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-16 lg:py-20">
                <div className="max-w-2xl mx-auto">
                    {/* Заголовок с адаптивными размерами */}
                    <div className="text-white xs:px-4 font-bold tracking-tight leading-tight mb-6 md:mb-10">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-2 sm:mb-3">
                            Центр
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-2 sm:mb-3">
                            Бариатрической
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
                            Хирургии в
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Волгограде
                        </div>
                    </div>

                    {/* Текст и кнопки */}
                    <div>
                        {/* Текст с отступами по бокам */}
                        <div className="mb-8 md:mb-10 px-4 md:px-0">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                                Ваше здоровье и комфорт — наша цель.
                            </h2>
                            <div className="space-y-3 md:space-y-4">
                                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                                    Мы предлагаем эффективные решения, которые меняют вашу жизнь к лучшему!
                                </p>
                                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                                    Современные методики, опытные специалисты и индивидуальный подход к каждому пациенту.
                                </p>
                            </div>
                        </div>

                        {/* Кнопки с адаптивным расположением и отступами */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-25 md:px-0">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                                aria-label="Записаться на консультацию"
                            >
                                Записаться
                            </button>
                            <button
                                onClick={handleCall}
                                className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                                aria-label="Позвонить по телефону +7 (8442) 20-27-76"
                            >
                                Позвонить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно записи */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default HeroSection;