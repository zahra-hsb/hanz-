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
        green: 'var(--primary-green)'
      },
      backgroundImage: {
        mainSection: 'url(../../public/image/cuh_banner.png)',
        aboutSection: 'url(../../public/image/6285071a478738158c37a31d_Window frames cover 1.png)',
        gallerySection: 'url(../../public/image/cover.jpg)'
      },
      boxShadow: {
        'shadow0' : '0 30px 0 0 #00AE8E'
      }
    },
  },
  plugins: [],
};
