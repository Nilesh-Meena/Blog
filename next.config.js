/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

//  https://lh3.googleusercontent.com/a/ACg8ocJ99K1A6CU4dpZfNIw9EwPIbCda5EoSXoNY71LADhOZJo8=s96-c
