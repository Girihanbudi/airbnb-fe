// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'id-ID'],
  },
  fallbackLng: {
    default: ['en-US'],
    'id-ID': ['en-US'],
  },
  nonExplicitSupportedLngs: true,
}
