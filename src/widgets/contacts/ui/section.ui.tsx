import React from 'react';

const ContactsSection = () => {
    return (
        <section id="contacts" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок секции */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
                        КОНТАКТЫ
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Контактная информация - занимает 1 часть */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                            <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Адрес:</h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                г. Волгоград, ул. Автотранспортная, 75
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                            <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Часы работы стационара:</h3>
                            <p className="text-gray-700 text-sm sm:text-base">
                                круглосуточно
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                            <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Телефон:</h3>
                            <p className="text-gray-700 text-base sm:text-lg font-medium">
                                +7 (8442) 20-45-20
                            </p>
                        </div>
                    </div>

                    {/* Карта - занимает 2 части */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded-xl border border-gray-300">
                        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/org/rzhd_meditsina_statsionar/113592397967/?from=mapframe&ll=44.404658%2C48.693522&z=16"
                                max-width="100%"
                                height="100%"
                                frameBorder="0"
                                className="absolute inset-0 w-full h-full"
                                title="Карта местоположения"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0 }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;