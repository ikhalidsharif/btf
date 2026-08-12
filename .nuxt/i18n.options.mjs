
// @ts-nocheck


export const localeCodes =  [
  "ar",
  "en"
]

export const localeLoaders = {
  "ar": [],
  "en": []
}

export const vueI18nConfigs = [
  () => import("../i18n/i18n.config.ts?hash=5b32d2e0&config=1" /* webpackChunkName: "__i18n_i18n_config_ts_5b32d2e0" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n/i18n.config.ts",
  "locales": [
    {
      "code": "ar",
      "language": "ar-BH",
      "dir": "rtl",
      "name": "العربية"
    },
    {
      "code": "en",
      "language": "en-US",
      "dir": "ltr",
      "name": "English"
    }
  ],
  "defaultLocale": "ar",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix",
  "lazy": false,
  "langDir": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "ar",
    "language": "ar-BH",
    "dir": "rtl",
    "name": "العربية",
    "files": []
  },
  {
    "code": "en",
    "language": "en-US",
    "dir": "ltr",
    "name": "English",
    "files": []
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
