// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeDetection: false,
  },
  fallbackLng: {
    default: ['en'],
    'id': ['en'],
  },
  nonExplicitSupportedLngs: true,
}
