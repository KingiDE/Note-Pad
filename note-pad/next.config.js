/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // eslint-disable-next-line no-undef
  // disable: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line no-undef
module.exports = withPWA();
