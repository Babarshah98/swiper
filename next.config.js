const { Domain } = require('domain')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["www.recordnet.com"],
    },
  };
  

module.exports = nextConfig
