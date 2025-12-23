'use client'
const Footer = () => {
    const navItems = [
        { label: 'Показания', href: '#indications' },
        { label: 'Стоимость', href: '#prices' },
        { label: 'Врачи', href: '#doctors' },
        { label: 'Преимущества', href: '#advantages' },
        { label: 'Контакты', href: '#contacts' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="py-8 bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4">
                <nav className="flex w-full gap-28 justify-center items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="text-gray-700 hover:text-red-600 transition-colors text-xl font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;