import CategorySection from "@/components/layout/CategorySection";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <main className="lg:w-full flex flex-col justify-center items-center w-full h-full border-lime-500 border-2">
      <Main />
      <CategorySection />

    </main>
  );
}
