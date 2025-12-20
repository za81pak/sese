"use client";

import React, { useState } from 'react';
import Image from "next/image";
import cat from "../../../../public/statics/cat.png";
import AppointmentModal from '../../../app/components/AppointmentModal';

const PromotionSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section>
                <div className="w-full text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">АКЦИЯ</h2>
                </div>
                <div className="w-full relative">
                    {/* Картинка с котиком */}
                    <Image src={cat} alt="котик"/>

                    {/* Кнопка на фоне картинки, смещённая левее */}
                    <div className="absolute bottom-18 px-90 eft-1/4"> {/* Изменил с left-1/2 на left-1/4 */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg"
                        >
                            ЗАПИСАТЬСЯ
                        </button>
                    </div>
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