'use client';

import ChangeLocale from '@/components/change-locale';
import useLocale from '@/hooks/useLocale';

const Index = () => {
    const { locale } = useLocale('home');

    return (
        <div>
            <h1>{locale('title')}</h1>
            <br />
            <ChangeLocale />
        </div>
    );
};

export default Index;
