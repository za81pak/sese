// src/widgets/calc/ui/section.ui.tsx
'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

const CalcSection = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        if (!weight.trim() || !height.trim()) {
            alert('Пожалуйста, введите вес и рост');
            return;
        }

        const weightNum = parseFloat(weight.replace(',', '.'));
        const heightNum = parseFloat(height.replace(',', '.')) / 100;

        if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
            alert('Пожалуйста, введите корректные значения');
            return;
        }

        const bmiValue = weightNum / (heightNum * heightNum);
        const roundedBmi = parseFloat(bmiValue.toFixed(1));

        setBmi(roundedBmi);

        if (bmiValue < 18.5) {
            setCategory('Недостаточный вес');
        } else if (bmiValue < 25) {
            setCategory('Нормальный вес');
        } else if (bmiValue < 30) {
            setCategory('Избыточный вес');
        } else if (bmiValue < 35) {
            setCategory('Ожирение I степени');
        } else if (bmiValue < 40) {
            setCategory('Ожирение II степени');
        } else {
            setCategory('Ожирение III степени (морбидное)');
        }
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setCategory('');
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Разрешаем только цифры и одну точку или запятую
        if (value === '' || /^[0-9]*[.,]?[0-9]*$/.test(value)) {
            setWeight(value);
        }
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Разрешаем только цифры и одну точку или запятую
        if (value === '' || /^[0-9]*[.,]?[0-9]*$/.test(value)) {
            setHeight(value);
        }
    };

    return (
        <section className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                {/* Заголовок секции */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                        Калькулятор ИМТ
                    </h1>
                </div>

                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
                    {/* Поле для веса */}
                    <div className="mb-8">
                        <label className="block text-lg font-bold text-gray-900 mb-3">
                            Вес (кг)
                        </label>
                        <Input
                            type="text"
                            inputMode="decimal"
                            value={weight}
                            onChange={handleWeightChange}
                            placeholder="Введите ваш вес"
                        />
                    </div>

                    {/* Поле для роста */}
                    <div className="mb-10">
                        <label className="block text-lg font-bold text-gray-900 mb-3">
                            Рост (см)
                        </label>
                        <Input
                            type="text"
                            inputMode="decimal"
                            value={height}
                            onChange={handleHeightChange}
                            placeholder="Введите ваш рост"
                        />
                    </div>

                    {/* Кнопки */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <button
                            onClick={calculateBMI}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-lg"
                        >
                            Рассчитать ИМТ
                        </button>
                        <button
                            onClick={resetCalculator}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                        >
                            Сбросить
                        </button>
                    </div>

                    {/* Результат */}
                    {bmi !== null && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Результат расчета
                            </h3>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-red-600 mb-2">
                                    {bmi.toFixed(1)}
                                </div>
                                <div className="text-lg font-semibold text-gray-800">
                                    {category}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CalcSection;