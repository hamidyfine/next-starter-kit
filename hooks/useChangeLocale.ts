import { useRouter, useParams } from 'next/navigation';
import locale_config from '@/config/locale';

const useChangeLocale = () => {
    const router = useRouter();
    const { locale } = useParams();

    // TODO: should handle pathname with query in changing locale
    const setLocale = (newLocale: typeof locale_config.locales[number]) => {
        if (locale !== newLocale) {
            router.push(`/${newLocale}`);
        }
    };

    return { locale, setLocale };
};

export default useChangeLocale;
