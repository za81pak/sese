"use client";

import React, { useState, useEffect, useRef } from 'react';
import Container from "@/components/shared/container";
import Image from "next/image";
import logo from "../../public/statics/logo.svg";
import call from "../../public/statics/call.svg";
import telegram from "../../public/statics/telegram.svg";
import odnok from "../../public/statics/odnok.svg";
import vk from "../../public/statics/vk.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { label: 'Показания', href: '#indications' },
        { label: 'Стоимость', href: '#prices' },
        { label: 'Врачи', href: '#doctors' },
        { label: 'Преимущества', href: '#advantages' },
        { label: 'Контакты', href: '#contacts' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-white shadow-sm" id='header'>
                <Container className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex items-center justify-between py-3 md:py-2">
                    {/* Логотип слева */}
                    <div className="flex-shrink-0 z-50">
                        <Image
                            src={logo}
                            alt="ПК Медицина"
                            className="w-auto h-7 md:h-8"
                            priority
                        />
                    </div>

                    {/* Бургер-кнопка */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Открыть меню"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    {/* Десктопные контакты */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:+78442202776"
                            className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
                        >
                            <Image
                                src={call}
                                alt="Телефон"
                                className="w-7 h-7 md:w-8 md:h-8"
                            />
                            <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                                +7 (8442) 20-27-76
                            </span>
                        </a>

                        <div className="flex items-center space-x-2 md:space-x-3">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <Image src={telegram} alt="Telegram" className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <Image src={vk} alt="VK" className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <Image src={odnok} alt="Одноклассники" className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </div>
                    </div>
                </Container>

                {/* Мобильное меню с кнопкой закрытия */}
                <div
                    ref={menuRef}
                    className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* Кнопка закрытия (крестик ✕) */}
                    <button
                        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center z-50"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Закрыть меню"
                    >
                        <span className="block w-6 h-0.5 bg-gray-700 rotate-45"></span>
                        <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-x-6"></span>
                    </button>

                    <div className="pt-20 px-6">
                        {/* Телефон и соцсети в меню */}
                        <div className="mb-8">
                            <a
                                href="tel:+78442202776"
                                className="flex items-center space-x-3 text-gray-700 mb-6"
                            >
                                <Image
                                    src={call}
                                    alt="Телефон"
                                    className="w-8 h-8"
                                />
                                <span className="font-bold text-lg">
                                    +7 (8442) 20-27-76
                                </span>
                            </a>

                            <div className="flex items-center space-x-4">
                                <a href="#" className="hover:opacity-80">
                                    <Image src={telegram} alt="Telegram" className="w-7 h-7" />
                                </a>
                                <a href="#" className="hover:opacity-80">
                                    <Image src={vk} alt="VK" className="w-7 h-7" />
                                </a>
                                <a href="#" className="hover:opacity-80">
                                    <Image src={odnok} alt="Одноклассники" className="w-7 h-7" />
                                </a>
                            </div>
                        </div>

                        {/* Навигация в меню */}
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="py-4 px-4 bg-gray-50 rounded-lg text-gray-800 hover:text-white hover:bg-red-600 transition-colors text-lg font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Десктопная навигация */}
            <div className="hidden md:block w-full sticky top-16 lg:top-10 z-40 bg-white shadow-sm border-t border-gray-100">
                <div className="w-full px-4 md:px-8 lg:px-12 xl:px-40 bg-white">
                    <nav className="flex items-center justify-center py-3 space-x-2 lg:space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="flex-1 max-w-[180px] text-center py-2 md:py-3 bg-white border border-gray-300 rounded-lg text-gray-800 hover:text-white hover:bg-red-600 transition-colors text-sm md:text-base font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;