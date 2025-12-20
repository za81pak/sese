
const nextConfig = {
    // Включаем статический экспорт
    output: 'export',

    // Для правильной обработки путей при экспорте
    trailingSlash: true,

    // Отключаем оптимизацию изображений для статического экспорта
    images: {
        unoptimized: true,
    },

    // Отключаем строгий режим для упрощения
    reactStrictMode: false,

    // Базовая конфигурация для сборки
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Для корректной работы со стилями
    experimental: {
        appDir: true,
    },

    // Если есть проблемы с путями, можно добавить basePath
    // basePath: process.env.NODE_ENV === 'production' ? '' : '',

    // Для игнорирования ошибок типа
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig