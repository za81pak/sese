'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FaqSection = () => {

    return (
        <>
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Заголовок секции */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-red-600 mb-6">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                    </div>

                    {/* Стили для смены плюса на минус */}
                    <style jsx global>{`
                        [data-state="open"] .accordion-plus { display: none; }
                        [data-state="open"] .accordion-minus { display: inline-block; }
                        [data-state="closed"] .accordion-plus { display: inline-block; }
                        [data-state="closed"] .accordion-minus { display: none; }
                    `}</style>

                    {/* Аккордеон - убрал defaultValue, теперь все закрыты по умолчанию */}
                    <Accordion type="multiple" className="space-y-4">
                        {/* Пункт 1 - Виды операций */}
                        <AccordionItem value="item-1" className="border border-gray-300 rounded-lg bg-white">
                            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-black hover:no-underline hover:bg-gray-50 [&>svg]:hidden">
                                <span className="flex items-center justify-between w-full">
                                    Виды операций
                                    <span className="flex items-center">
                                        <span className="accordion-plus text-xl text-gray-600">+</span>
                                        <span className="accordion-minus text-xl text-gray-600">-</span>
                                    </span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-6">
                                    {/* Фото и текст - ТЕКСТ СЛЕВА, ФОТО СПРАВА */}
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Текст слева */}
                                        <div className="w-full md:w-2/3 space-y-4">
                                            <h4 className="text-lg font-bold text-black">Что такое бандажирование желудка</h4>
                                            <p className="text-gray-600">
                                                Для уменьшения желудка на верхнюю часть накладывают силиконовое кольцо. Регулируемый
                                                бандаж делит орган на две части, которые сообщаются между собой через небольшой
                                                просвет. Операция направлена на создание механического препятствия, чтобы уменьшить
                                                количество пищи, которое пациент сможет съесть за 1 раз. Количество потребляемых калорий
                                                уменьшается, в результате происходит снижение веса.
                                            </p>
                                        </div>

                                        {/* Фото справа */}
                                        <div className="w-full md:w-1/3">
                                            {/* Здесь можно добавить кнопку для записи на консультацию по этой операции */}
                                        </div>
                                    </div>

                                    {/* Остальные виды операций (просто текст) */}
                                    <div className="space-y-6 mt-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-2">Что такое рукавная гастропластика</h4>
                                            <p className="text-gray-600">
                                                Рукавная резекция желудка - уменьшение объема органа до 100 мл. Хирургическое
                                                вмешательство заключается в удалении бОльшей части органа, чтобы снизить количество
                                                потребляемой пищи. В результате ушивания при помощи специальных кассет остается тонкая
                                                полая трубка. Через нее может пройти небольшое количество пищи. Это приводит к
                                                естественному похудению — пациент с морбидным ожирением может потерять до 75%
                                                лишнего веса.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-2">Что такое гастрипликация</h4>
                                            <p className="text-gray-600">
                                                Гастрипликация — это операция, при которой желудок &quot;складывают&quot; и ушивают, чтобы
                                                уменьшить его объем. После гастрипликации пациент быстрее чувствует насыщение даже от
                                                небольшого количества еды. Это помогает снизить количество потребляемых калорий и, как
                                                следствие, способствует похудению.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-2">Что такое шунтирование желудка</h4>
                                            <p className="text-gray-600">
                                                Гастрошунтирование выполняется с целью уменьшения объема желудка. Суть гастрошунтирования заключается в уменьшении размера желудка до 30 мл и соединении его с петлей тонкой кишки. Во время операции бОльшую часть органа удаляют, а из оставшегося отдела формируют малый желудок. Его соединяют с петлей тонкой кишки. После шунтирования потребление пищи сокращается и происходит снижение веса.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-black mb-2">Что такое внутрижелудочный баллон</h4>
                                            <p className="text-gray-600">
                                                Установка внутрижелудочного баллона — малоинвазивная бариатрическая операция для лечения ожирения. Суть операции - введение в желудок силиконового баллона с дальнейшим наполнением его физиологическим раствором. Установку внутрижелудочного баллона проводят с помощью эндоскопического оборудования. Баллон служит временной мерой для снижения аппетита, уменьшения количества потребляемой пищи. Помогает сформировать правильное пищевое поведение, плавно снизить вес.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Пункт 2 - Показания к операции */}
                        <AccordionItem value="item-2" className="border border-gray-300 rounded-lg bg-white">
                            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-black hover:no-underline hover:bg-gray-50 [&>svg]:hidden">
                                <span className="flex items-center justify-between w-full">
                                    Показания к операции
                                    <span className="flex items-center">
                                        <span className="accordion-plus text-xl text-gray-600">+</span>
                                        <span className="accordion-minus text-xl text-gray-600">-</span>
                                    </span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-black mb-4">Основные показания:</h3>
                                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                                        <li>Ожирение 3-й степени (морбидное). Когда ИМТ ≥ 40 кг/м², а также ИМТ ≥ 35 кг/м², но есть сопутствующие заболевания;</li>
                                        <li>Неэффективность консервативных методов снижения массы тела;</li>
                                        <li>Лечение коморбидной патологии (сахарный диабет 2 типа, гипертоническая болезнь, апноэ и т.д.).</li>
                                    </ol>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Пункт 3 - Восстановление после операции */}
                        <AccordionItem value="item-3" className="border border-gray-300 rounded-lg bg-white">
                            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-black hover:no-underline hover:bg-gray-50 [&>svg]:hidden">
                                <span className="flex items-center justify-between w-full">
                                    Восстановление после операции
                                    <span className="flex items-center">
                                        <span className="accordion-plus text-xl text-gray-600">+</span>
                                        <span className="accordion-minus text-xl text-gray-600">-</span>
                                    </span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-black mb-4">Основные этапы восстановления:</h4>
                                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                                        <li>Нахождение в хирургическом отделении стационара под присмотром лечащего врача;</li>
                                        <li>Лечение в соответствии с назначением смежных специалистов (кардиолог, эндокринолог и т.д.);</li>
                                        <li>Диетотерапия;</li>
                                        <li>Постепенная дозированная физическая нагрузка;</li>
                                    </ol>
                                    <p className="text-gray-600 mt-4">
                                        Этапы и сроки восстановления носят индивидуальный характер и назначаются лечащим врачом на очной консультации.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Пункт 4 - Другое */}
                        <AccordionItem value="item-4" className="border border-gray-300 rounded-lg bg-white">
                            <AccordionTrigger className="px-6 py-4 text-lg font-bold text-black hover:no-underline hover:bg-gray-50 [&>svg]:hidden">
                                <span className="flex items-center justify-between w-full">
                                    Другое
                                    <span className="flex items-center">
                                        <span className="accordion-plus text-xl text-gray-600">+</span>
                                        <span className="accordion-minus text-xl text-gray-600">-</span>
                                    </span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-black mb-4">Подготовка к операции</h4>
                                        <p className="text-gray-600">
                                            включает в себя: лабораторную диагностику, УЗИ органов брюшной полости и щитовидной железы, Эхо-КГ, УЗИ вен нижних конечностей, ЭГДС, рентгенография грудной клетки. Перед операцией пациента консультирует диетолог, терапевт, эндокринолог, при необходимости – другие врачи-специалисты. Окончательный объем исследований назначает лечащий врач на очной консультации. Весь комплекс предгоспитального обследования можно пройти в стационаре "РЖД-Медицина" г. Волгоград.
                                        </p>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h4 className="text-lg font-bold text-black mb-4">Наркоз</h4>
                                        <p className="text-gray-600">
                                            Все бариатрические оперативные вмешательства проводятся под общим наркозом. Перед операцией пациент в обязательном порядке консультируется у врача-анестезиолога.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Модальное окно для записи */}

        </>
    );
};

export default FaqSection;