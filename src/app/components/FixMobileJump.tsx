'use client';

import { useEffect } from 'react';

export default function FixMobileJump() {
    useEffect(() => {
        // Просто предотвращаем некоторые проблемы с прокруткой
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = '';
        };
    }, []);

    return null;
}