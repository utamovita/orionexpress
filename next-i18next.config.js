const path = require("path");

/** @type import("next").I18NConfig */
const i18n = {
    defaultLocale: "pl",
    locales: ["en", "de", "pl"],
    localeDetection: true,
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
    i18n,
    keySeparator: ".",
    nsSeparator: ":",
    interpolation: {
        escapeValue: false,
    },
    reloadOnPrerender: process.env.NODE_ENV === "development",
    localePath: path.resolve("./public/locales")
};

module.exports = next18nextConfig;
