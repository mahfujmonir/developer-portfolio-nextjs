/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // এই সেটিংসটি বিল্ডের সময় এরর থাকলেও ওয়েবসাইট চালু হতে সাহায্য করবে
    ignoreDuringBuilds: true,
  },
  typescript: {
    // টাইপস্ক্রিপ্ট এরর থাকলেও সাইট বিল্ড হবে
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['i.ibb.co', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
