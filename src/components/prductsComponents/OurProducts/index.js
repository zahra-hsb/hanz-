import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'
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
        <Profile />
        <ProfileProperties />
        <Cratinwall />

      </div>
    </>
  );
}