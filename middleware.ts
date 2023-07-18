import createMiddleware from 'next-intl/middleware';
import locale_config from './config/locale';

export default createMiddleware({
    locales: locale_config.locales,
    defaultLocale: locale_config.default,
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
