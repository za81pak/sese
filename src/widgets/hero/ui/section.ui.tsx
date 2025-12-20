"use client";

import React, { useState } from 'react';
import AppointmentModal from '../../../app/components/AppointmentModal';
import Image from 'next/image';
import hero from '../../../../public/statics/hero.png';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="relative w-full min-h-[700px] overflow-hidden mt-16">
            {/* Фоновое изображение */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero}
                    alt="Центр бариатрической хирургии"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Контент поверх изображения */}
            <div className="relative z-10 w-full px-53 pt-16 pb-16">
                <div className="max-w-2xl"> {/* Ограничиваем ширину контента */}
                    {/* Заголовок */}
                    <div className="text-white font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-10">
                        <div className="text-5xl md:text-5xl mb-3">Центр</div>
                        <div className="text-4xl md:text-4xl mb-3">Бариатрической</div>
                        <div className="text-3xl md:text-4xl mb-3">Хирургии в</div>
                        <div className="text-2xl md:text-3xl">Волгограде</div>
                    </div>

                    {/* Текст и кнопки */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                                Ваше здоровье и комфорт — наша цель.
                            </h2>
                            <div className="space-y-4">
                                <p className="text-white text-base md:text-lg">
                                    Мы предлагаем эффективные решения, которые меняют вашу жизнь к лучшему!
                                </p>
                                <p className="text-white text-base md:text-lg">
                                    Современные методики, опытные специалисты и индивидуальный подход к каждому пациенту.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <button onClick={() => setIsModalOpen(true)} className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors shadow-lg hover:shadow-xl">
                                Записаться
                            </button>
                            <button className=" cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors shadow-lg hover:shadow-xl">
                                Позвонить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </section>
    );
};

export default HeroSection;