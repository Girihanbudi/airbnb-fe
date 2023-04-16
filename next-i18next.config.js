// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  fallbackLng: {
    default: ['en'],
    'id': ['en'],
  },
  localeDetection: false,
  nonExplicitSupportedLngs: true,
}
