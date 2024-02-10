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
        hoverColor: 'var(--hover-color)',
      },
      backgroundImage: {
        mainSection: 'url(../../public/image/banner/MAINPAGE-banner.png)',
        aboutSection: 'url(../../public/image/whtb-banner-01-background.jpg)',
        gallerySection: 'url(../../public/image/sectors.banner.building-2000x560.jpg)',
        productSection: 'url(../../public/image/banner/product-banner-2.jpg)',
        BuilingSection: 'url(../../public/image/building-banner.png)',
        industrialSection: 'url(../../public/image/industrial-banner.jpg)',
        servicesSection: 'url(../../public/image/banner/khadamat.png)',
        profileSection: 'url(../../public/image/profile_aluminium.jpg)',
        agencySection: 'url(../../public/image/About-Us-Banner.jpg)'
      },
      boxShadow: {
        'shadow0' : '0 30px 0 0 #00AE8E'
      },
      textShadow: {
        'shadow-lg' : '1px 1px 2px #00000069'
      }
    },
  },

};
