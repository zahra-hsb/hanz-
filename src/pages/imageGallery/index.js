import Main from "@/components/globalComponents/Main";
import Image from "next/image"
import image1 from "../../../public/image/Shayco-Ghorfe-WEBSITE.jpg"
import image2 from "../../../public/image/Dominion-Tower-14.jpg"
import mainPic from "../../../public/image/Modiriyat-WEBSITE.jpg"
import primePic1 from "../../../public/image/Sales-Manager-WEBSITE.jpg"
import primePic2 from "../../../public/image/sales-manager-WEBSITE-1.jpg"
import arrowRight from "../../../public/icons/arrow-1.svg"
import arrowLeft from "../../../public/icons/arrow.svg"


export default function ImageGallery() {
  return (
    <main className="flex flex-col">
      <Main title={'گالری تصاویر'} bg={'bg-aboutSection'} height={'h-[390px]'} display={'hidden'} />
      <section className="p-10">
        <div className="flex items-center justify-center flex-wrap gap-16 p-5">
          <div className="flex flex-col items-center justify-between gap-5 cursor-pointer overflow-hidden lg:w-[28%]">
            <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
            {/* <div className="absolute top-0 left-0 w-full h-[180px] bg-black opacity-0 hover:opacity-60"></div> */}
            <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 cursor-pointer overflow-hidden lg:w-[28%]">
            <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
            <h3 className="hover:text-green">تصاویر پروژه ها</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 cursor-pointer overflow-hidden lg:w-[28%]">
            <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
            <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
          </div>
        </div>
      </section>
      <div className="opacity-0 transition duration-100 z-[-100] fixed top-0 left-0 z-40 w-full h-full bg-black cursor-pointer"></div>
      <section className="opacity-0 transition duration-100 z-[-100] fixed top-[50%] left-[50%] p-16 ml-[-500px] mt-[-300px] z-50 w-[1000px] h-[600px] bg-gradient-to-r from-[#010101] to-[#252525]">
        <div className="flex items-center justify-center">
          <div>
            <Image src={mainPic} alt="" width={400} className="inner drop-shadow-sm"/>
          </div>
        </div>
        <div className="flex items-center justify-between py-16">
          <Image src={arrowRight} alt="arrow-right" className="cursor-pointer hover:invert" />
          <div>
            <Image src={primePic1} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
          </div>
          <div>
            <Image src={mainPic} alt="" width={200} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
          </div>
          <div>
            <Image src={primePic2} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
          </div>
          <Image src={arrowLeft} alt="arrow-right" className="cursor-pointer hover:invert" />
        </div>
      </section>

    </main>
  );
}
