// 1. AppointmentModal.tsx (с серым фоном)
"use client";

import React, { useState } from 'react';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, phone, agreed });
        onClose();
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let formatted = value.replace(/\D/g, '');

        if (formatted.length > 0) {
            formatted = '+7 (' + formatted;
            if (formatted.length > 7) formatted = formatted.substring(0, 7) + ') ' + formatted.substring(7);
            if (formatted.length > 12) formatted = formatted.substring(0, 12) + '-' + formatted.substring(12);
            if (formatted.length > 15) formatted = formatted.substring(0, 15) + '-' + formatted.substring(15);
        }

        setPhone(formatted);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Серый мутный фон */}
            <div
                className="absolute inset-0 bg-gray-800/70" // Изменено на серый
                onClick={onClose}
            />

            <div className="relative bg-white rounded-lg w-full max-w-md mx-4 z-10">
                {/* Черный текст в заголовке */}
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-black">Записаться на приём</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <div className="w-6 h-6 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-0.5 bg-black rotate-45"></div>
                                <div className="w-6 h-0.5 bg-black -rotate-45 absolute"></div>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-gray-600 mb-6">
                        Заполните заявку. В ближайшее время мы с Вами свяжемся и подберём удобное время для консультации со специалистом.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Введите ваше имя
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border-b border-gray-300 focus:border-red-600 focus:outline-none transition-colors text-black" // Добавлен text-black
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Телефон
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="w-full px-4 py-3 border-b border-gray-300 focus:border-red-600 focus:outline-none transition-colors text-black" // Добавлен text-black
                                placeholder="+7 (000) 000-00-00"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="flex items-start space-x-3">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                        required
                                    />
                                </div>
                                <span className="text-sm text-gray-600">
                  Нажимая на кнопку «ЗАПИСАТЬСЯ», Вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed}
                            className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors ${
                                agreed
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Записаться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;