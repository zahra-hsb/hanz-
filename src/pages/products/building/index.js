import Main from "@/components/globalComponents/Main";
import Cratinwall from "@/components/prductsComponents/Cratinwall";
import MainSection from "@/components/prductsComponents/MainSection";
import OurProducts from "@/components/prductsComponents/OurProducts";
import Profile from "@/components/prductsComponents/Profile";
import ProfileProperties from "@/components/prductsComponents/ProfileProperties";
import WhyHanz from "@/components/prductsComponents/WhyHanz";

export default function Products() {
  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'ساختمانی'} bg={'bg-buildingSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        {/* <MainSection />

        <WhyHanz />
        <Profile />
        <ProfileProperties />
        <Cratinwall /> */}

      </div>

    </main>
  );
}
