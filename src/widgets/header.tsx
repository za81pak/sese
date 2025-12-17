import React from 'react';
import Container from "@/components/shared/container";
import Image from "next/image";
import logo from "../../public/statics/logo.svg";
import call from "../../public/statics/call.svg";
import telegram from "../../public/statics/telegram.svg";
import odnok from "../../public/statics/odnok.svg";
import vk from "../../public/statics/vk.svg";

const Header = () => {
    const navItems = [
        { label: 'Показания', href: '#' },
        { label: 'Стоимость', href: '#' },
        { label: 'Врачи', href: '#' },
        { label: 'Преимущества', href: '#' },
        { label: 'Контакты', href: '#' },
    ];

    return (
        <>
            {/* Верхняя часть с логотипом, телефоном и иконками соцсетей */}
            <header className="w-full px-40 py-2 z-50 sticky top-0 bg-white" id='header'>
                <Container className="w-full px-8 lg:px-12 flex items-center justify-between">
                    {/* Логотип слева */}
                    <div className="flex-shrink-0">
                        <Image
                            src={logo}
                            alt="ПК Медицина"
                            className="w-auto h-8"
                            priority
                        />
                    </div>

                    {/* Телефон и иконки соцсетей справа */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="tel:+78442202776"
                            className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors"
                        >
                            <Image
                                src={call}
                                alt="Телефон"
                                className="w-8 h-8"
                            />
                            <span className="font-semibold text-base whitespace-nowrap">
                                +7 (8442) 20-27-76
                            </span>
                        </a>

                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={telegram}
                                    alt="Telegram"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={vk}
                                    alt="VK"
                                    className="w-6 h-6"
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={odnok}
                                    alt="Одноклассники"
                                    className="w-6 h-6"
                                />
                            </a>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Нижняя часть с навигацией - отдельные блоки с отступами */}
            <div className="w-full sticky top-14 z-40">
                <div className="w-full px-53">
                    <nav className="hidden lg:flex items-center justify-center py-3 space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex-1 text-center py-3 bg-white border border-gray-500 rounded-lg text-gray-800 hover:text-gray-200 hover:bg-red-600 transition-colors text-base font-medium"
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