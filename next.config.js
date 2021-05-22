const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.js");

// module.exports = withNextra();

module.exports = withNextra({
  webpack(config) {
    config.plugins.pop(); // remove stork plugin which was added by nextra. Remove when nextra version is bumped!
    return config;
  },
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  future: {
    webpack5: true,
  },
});

// fix enonet error
// https://github.com/shuding/nextra/issues/136

// module.exports = withNextra({
//   webpack(config) {
//     config.plugins.pop(); // remove stork plugin which was added by nextra. Remove when nextra version is bumped!
//     return config;
//   },
// });
