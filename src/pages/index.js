import AboutSection from "@/components/homeComponents/AboutSection";
import CategorySection from "@/components/homeComponents/CategorySection";
import Company from "@/components/homeComponents/Company";
import FaQ from "@/components/homeComponents/FaQ";
import Main from "@/components/globalComponents/Main";
import Slider from "@/components/homeComponents/Carousel";

export default function Home() {
  return (
    <main>
      <Main title={'سیستم های نوین درب و پنجره'} bg={'bg-mainSection'} text={'ما با هم ساختمان های پایدار با راه حل های آلومینیومی با کیفیت بالا ایجاد می کنیم.'} height={'lg:h-[650px] h-[500px] '}/>
      <CategorySection />
      <AboutSection />
      <Company />
      <FaQ />
      <Slider />
    </main>
  );
}
