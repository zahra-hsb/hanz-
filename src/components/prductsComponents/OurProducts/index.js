import MainSection from "../MainSection";
import Main from "@/components/globalComponents/Main";
import Profile from "../Profile";
import ProfileProperties from "../ProfileProperties";
import Cratinwall from "../Cratinwall";
import WhyHanz from "../WhyHanz";


export default function OurProducts() {
  return (
    <>
      <Main title={'محصولات'} bg={'bg-productSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <MainSection />

        <WhyHanz />
      </div>
    </>
  );
}