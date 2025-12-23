import React from 'react';
import Image from 'next/image';
import fat from '../../../../public/statics/fat.svg';
import sugar from '../../../../public/statics/sugar.svg';
import heart from '../../../../public/statics/heart.svg';
import bug from '../../../../public/statics/bug.svg';
import pecen from '../../../../public/statics/pecen.svg';
import serc from '../../../../public/statics/serc.svg';

const CardSection = () => {
    const indications = [
        {
            id: 1,
            icon: fat,
            title: "Морбидное ожирение",
            description: "Хроническое заболевание у пациента с индексом массы тела более 30 кг/м2, когда диеты и упражнения не помогают"
        },
        {
            id: 2,
            icon: sugar,
            title: "Осложнения ожирения",
            description: "Высокое артериальное давление, обструктивное апноэ, повышенный уровень холестерина (дислипидемия)"
        },
        {
            id: 3,
            icon: heart,
            title: "Сахарный диабет 2 типа",
            description: "Если медикаментозная терапия не помогает снизить и контролировать сахар в крови"
        },
        {
            id: 4,
            icon: bug,
            title: "Заболевания суставов, позвоночника",
            description: "Причиной развития артроза и остеохондроза становится повышенная нагрузка на суставы и позвоночник"
        },
        {
            id: 5,
            icon: pecen,
            title: "Жировая дистрофия печени",
            description: "Дистрофические процессы, которые вызваны ожирением, приводят к необратимым последствиям — фиброзу, циррозу печени"
        },
        {
            id: 6,
            icon: serc,
            title: "Хронические заболевания",
            description: "Наличие ожирения способствует воспалению и нарушению сердечной деятельности"
        }
    ];

    return (
        <section id="indications" className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white">
            {/* Контейнер с ограничением по ширине */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-46">
                {/* Заголовок секции */}
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                        ПОКАЗАНИЯ К БАРИАТРИЧЕСКОЙ ОПЕРАЦИИ ДЛЯ ПОХУДЕНИЯ
                    </h1>
                </div>

                {/* Сетка с показаниями - ограничена шириной контейнера */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {indications.map((indication) => (
                        <div
                            key={indication.id}
                            className="bg-white rounded-xl p-3 transition-all duration-300 border border-gray-300 hover:border-red-300 hover:shadow-md flex flex-col items-center"
                        >
                            {/* Иконка */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 md:w-20 md:h-20 relative">
                                    <Image
                                        src={indication.icon}
                                        alt={indication.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Заголовок и описание */}
                            <div className="text-center flex-grow">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    {indication.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {indication.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardSection;