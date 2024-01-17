/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors: {
        green: 'var(--primary-green)',
      },
      backgroundImage: {
        mainSection: 'url(../../public/image/cuh_banner.png)',
        aboutSection: 'url(../../public/image/whtb-banner-01-background.jpg)',
        gallerySection: 'url(../../public/image/maxresdefault.jpg)',
        productSection: 'url(../../public/image/wood-windows.jpg)',
        buildingSection: 'url(../../public/image/building-banner.png)',
        profileSection: 'url(../../public/image/profile_aluminium.jpg)'
      },
      boxShadow: {
        'shadow0' : '0 30px 0 0 #00AE8E'
      }
    },
  },
  plugins: [],
};
