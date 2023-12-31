import AboutSection from "@/components/homeComponents/AboutSection";
import CategorySection from "@/components/homeComponents/CategorySection";
import Company from "@/components/homeComponents/Company";
import FaQ from "@/components/homeComponents/FaQ";
import Main from "@/components/globalComponents/Main";
import Slider from "@/components/homeComponents/Carousel";

export default function Home() {
  return (
    <main>
      <Main />
      <CategorySection />
      <AboutSection />
      <Company />
      <FaQ />
      <Slider />
    </main>
  );
}
