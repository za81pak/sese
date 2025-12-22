"use client";

import React, { useState } from 'react';
import Image from "next/image";
import cat from "../../../../public/statics/cat.png";
import AppointmentModal from '../../../app/components/AppointmentModal';

const PromotionSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="px-4 sm:px-8 lg:px-16">
                <div className="w-full text-center mb-4 sm:mb-6 lg:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 sm:text-xl lg:text-3xl">АКЦИЯ</h2>
                </div>
                <div className="w-full relative">
                    {/* Картинка с котиком */}
                    <Image src={cat} alt="котик" className="w-full h-auto"/>

                    {/* Кнопка на фоне картинки, смещённая левее */}

                </div>
                <div className="flex justify-center " >
                    <button onClick={() => setIsModalOpen(true)} className="cursor-pointer flex  bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl text-xs sm:py-2 sm:px-6 sm:text-sm md:py-3 md:px-8 md:text-base lg:py-4 lg:px-12 lg:text-lg">
                        ЗАПИСАТЬСЯ
                    </button>
                </div>
            </section>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default PromotionSection;