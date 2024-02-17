import AboutSection from "@/components/homeComponents/AboutSection";
import CategorySection from "@/components/homeComponents/CategorySection";
import Company from "@/components/homeComponents/Company";
import FaQ from "@/components/homeComponents/FaQ";
import Main from "@/components/globalComponents/Main";
import Slider from "@/components/homeComponents/Carousel";
import { useEffect, useState } from "react";
import Design from "@/components/homeComponents/Design";
import DesignTitle from "@/components/homeComponents/DesignTitle";
import WhyHanzHome from "@/components/homeComponents/WhyHanzHome";
import HanzUnits from "@/components/homeComponents/HanzUnits";
import Notification from "@/components/globalComponents/Notification"

export default function Home() {
  const [isOpenNotif, setIsOpenNotif] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      console.log('notif')
      setIsOpenNotif(true)
    }, 1000);

  }, []);

  function handleClose() {
    setIsOpenNotif(false)
  }

  // if(isOpenNotif) {
  //   return isClose && <Notification handleClose={handleClose} />
  // }

  return (
    <main>

      <Main title={'تولید پروفیل آلومینیوم'} bg={'bg-mainSection'} text={'ما با هم ساختمان های پایدار با راه حل های آلومینیومی با کیفیت بالا ایجاد می کنیم.'} height={'lg:h-[650px] h-[500px] '} />
      <CategorySection />
      {/* <AboutSection /> */}
      <WhyHanzHome />
      <HanzUnits />
      {/* <Notification /> */}
      {/* <DesignTitle />
      <Design /> */}
      {/* <Company /> */}
      {/* <FaQ /> */}
      {/* <Slider /> */}
      {isOpenNotif && <Notification handleClose={handleClose} />}
    </main>
  );
}
