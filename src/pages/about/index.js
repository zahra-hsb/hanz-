import AboutUs from "@/components/aboutComponent/AboutUs";
import Main from "@/components/globalComponents/Main";

export default function ABOUT() {
  return (
    <>
      <Main title={'درباره ما'} bg={'bg-aboutSection'} display={'hidden'} height={'h-[360px]'}/>
      <main className="flex flex-col justify-center items-center sm:p-12 py-10">
        <AboutUs />
      </main>
    </>
  );
}
