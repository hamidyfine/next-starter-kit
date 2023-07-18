import locale_config from '@/config/locale';
import useChangeLocale from '@/hooks/useChangeLocale';

const ChangeLocale = () => {
    const { setLocale } = useChangeLocale();

    return (
        <div>
            {locale_config.locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => setLocale(locale)}
                >
                    {locale}
                </button>
            ))}
        </div>
    );
};

export default ChangeLocale;
