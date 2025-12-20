import React from 'react';
import Image from 'next/image';
import doctor1 from '../../../../public/statics/doctor1.png';
import doctor2 from '../../../../public/statics/doctor2.png';

const DoctorsSection = () => {
    return (
        <section id="doctors" className="py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Заголовок секции */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">НАШИ ВРАЧИ</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ваше здоровье в надежных руках наших высококвалифицированных специалистов.
                    </p>
                </div>

                {/* Карточки врачей */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-start">
                    {/* Первый врач - в серой рамке */}
                    <div className="flex-1 max-w-sm border border-gray-300 rounded-lg p-4 bg-gray-200 flex flex-col">
                        <div className="mb-6 flex-grow">
                            <div className="relative h-80 w-full mb-4">
                                <Image
                                    src={doctor1}
                                    alt="Тарасов Дмитрий Александрович"
                                    fill
                                    className="object-cover rounded"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-black">
                                    Тарасов<br/>Дмитрий<br/>Александрович
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-gray-600 font-medium">
                                        Хирург (Высшая категория)
                                    </p>
                                    <p className="text-gray-600 text-sm">Стаж более 19 лет</p>
                                </div>
                            </div>
                        </div>

                        {/* Отзывы - маленькая кнопка, центрированная */}
                        <div className="mt-auto pt-4 text-center">
                            <div className="bg-gray-400 text-gray-700 py-2 px-6 rounded-xl text-sm hover:bg-gray-300 transition-colors duration-200 inline-block">
                                Отзывы
                            </div>
                        </div>
                    </div>

                    {/* Второй врач - в серой рамке */}
                    <div className="flex-1 max-w-sm border border-gray-300 rounded-lg p-4 bg-gray-200 flex flex-col">
                        <div className="mb-6 flex-grow">
                            <div className="relative h-80 w-full mb-4">
                                <Image
                                    src={doctor2}
                                    alt="Шпирный Сергей Анатольевич"
                                    fill
                                    className="object-cover rounded"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-black">
                                    Шпирный<br/>Сергей<br/>Анатольевич
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-gray-600 font-medium">
                                        Хирург (Высшая категория)
                                    </p>
                                    <p className="text-gray-600 text-sm">Стаж более 22 лет</p>
                                </div>
                            </div>
                        </div>

                        {/* Отзывы - маленькая кнопка, центрированная */}
                        <div className="mt-auto pt-4 text-center">
                            <div className="bg-gray-400 text-gray-700 py-2 px-6 rounded-xl text-sm hover:bg-gray-300 transition-colors duration-200 inline-block">
                                Отзывы
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;