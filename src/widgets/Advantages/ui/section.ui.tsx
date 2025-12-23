import React from 'react';
import Image from 'next/image';
import pop1 from '../../../../public/statics/pop.svg';
import pop2 from '../../../../public/statics/pop2.svg';
import pop3 from '../../../../public/statics/pop3.svg';

const AdvantagesSection = () => {
    return (
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-[1120px] mx-auto">
                {/* Заголовок секции */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-5 lg:mb-6">
                        НАШИ ПРЕИМУЩЕСТВА
                    </h2>
                </div>

                {/* Карточки преимуществ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                    {/* Первое преимущество */}
                    <div className="bg-gray-200 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            {/* Иконка */}
                            <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20  lg:h-20 mb-4 sm:mb-5 lg:mb-6">
                                <Image
                                    src={pop1}
                                    alt="Высококалифицированные специалисты"
                                    fill
                                    className="object-contain "
                                />
                            </div>

                            {/* Заголовок и текст */}
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 text-center">
                                Высококалифицированные специалисты
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                                Опытные хирурги обладают необходимыми навыками и знаниями для выполнения сложных операций. Совершенствуют свои профессиональные навыки и следят за последними достижениями в области бариатрической хирургии.
                            </p>
                        </div>
                    </div>

                    {/* Второе преимущество */}
                    <div className="bg-gray-200 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            {/* Иконка */}
                            <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mb-4 sm:mb-5 lg:mb-6">
                                <Image
                                    src={pop2}
                                    alt="Современное оборудование"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Заголовок и текст */}
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 text-center">
                                Современное оборудование
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                                Высокотехнологичное и надежное оборудование соответствует всем мировым стандартам безопасности и качества. Позволяет гарантировать высокий уровень результатов и минимизировать риски осложнений.
                            </p>
                        </div>
                    </div>

                    {/* Третье преимущество */}
                    <div className="bg-gray-200 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center">
                            {/* Иконка */}
                            <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mb-4 sm:mb-5 lg:mb-6">
                                <Image
                                    src={pop3}
                                    alt="Доступные цены"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Заголовок и текст */}
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 text-center">
                                Доступные цены
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                                Доступная бариатрическая хирургия предлагает пациентам гибкие цены и различные варианты оплаты. Для постоянных клиентов предусмотрены скидки и персональные предложения.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;