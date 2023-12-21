import AboutSection from "@/components/layout/AboutSection";
import CategorySection from "@/components/layout/CategorySection";
import Company from "@/components/layout/Company";
import FaQ from "@/components/layout/FaQ";
import Main from "@/components/layout/Main";
import Slider from "@/components/layout/Slider";

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
