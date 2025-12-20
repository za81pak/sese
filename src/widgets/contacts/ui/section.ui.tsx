import React from 'react';

const ContactsSection = () => {
    return (
        <section id="contacts" className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок секции */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-red-600 mb-6">Контакты</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Контактная информация - занимает 1 часть */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-base font-bold text-black mb-1">Адрес:</h3>
                            <p className="text-gray-700 text-sm">г. Волгоград, ул. Автотранспортная, 75</p>
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-black mb-1">Часы работы стационара:</h3>
                            <p className="text-gray-700 text-sm">круглосуточно</p>
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-black mb-1">Телефон:</h3>
                            <p className="text-gray-700 text-base font-medium">+7 (8442) 20-45-20</p>
                        </div>
                    </div>

                    {/* Карта - занимает 2 части */}
                    <div className=" position:relative overflow:hidden ">
                        <a href="https://yandex.ru/maps/org/rzhd_meditsina_statsionar/113592397967/?utm_medium=mapframe&utm_source=maps"
                        className="text-xs position:absolute top-0">РЖД-Медицина, стационар</a><a
                        href="https://yandex.ru/maps/38/volgograd/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"
                        className="text-xs position:absolute top-1">Медцентр, клиника в Волгограде</a>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/org/rzhd_meditsina_statsionar/113592397967/?from=mapframe&ll=44.404658%2C48.693522&z=16"
                            width="740" height="400"
                            className="rounded-xl border border-gray-500 position:relative"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;