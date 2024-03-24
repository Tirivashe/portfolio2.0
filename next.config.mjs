/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
};

export default nextConfig;
