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
        aboutSection: 'url(../../public/image/bg-side-12.jpg)',
        gallerySection: 'url(../../public/image/cover.jpg)',
        productSection: 'url(../../public/image/wood-windows.jpg)'
      },
      boxShadow: {
        'shadow0' : '0 30px 0 0 #00AE8E'
      }
    },
  },
  plugins: [],
};
