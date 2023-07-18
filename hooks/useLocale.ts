import { useTranslations } from 'next-intl';
import * as ILocales from '../types/locales';

const useLocale = (namespace?: keyof ILocales.IRootObject) => {
    const t = useTranslations(namespace);

    // TODO: `key` should be type-safe
    const locale = (key: string) => {
        return t(key) as string;
    };

    return { locale };
};

export default useLocale;
