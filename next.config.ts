// /**
//  * @type {import('next').NextConfig}
//  */
// module.exports = {
//   i18n: {
//     locales: ["en", "pt", "tr", "zh-cn"],
//     defaultLocale: "en",
//   },
// };

const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
