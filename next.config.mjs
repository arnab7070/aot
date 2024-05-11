import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'i.ytimg.com', 'media.licdn.com'],
        
    },
};

export default withNextVideo(nextConfig);