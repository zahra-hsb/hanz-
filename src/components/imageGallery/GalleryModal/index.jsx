"use client";
import Image from "next/image"
import mainPic from "../../../../public/image/Modiriyat-WEBSITE.jpg"
import primePic1 from "../../../../public/image/Sales-Manager-WEBSITE.jpg"
import primePic2 from "../../../../public/image/sales-manager-WEBSITE-1.jpg"
import arrowRight from "../../../../public/icons/arrow-1.svg"
import arrowLeft from "../../../../public/icons/arrow.svg"
import Slider from "@/components/globalComponents/Slider"


import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const GalleryModal = ({ closeModal }) => {
    const images = [mainPic, primePic1, primePic2, primePic1, primePic2, primePic1, mainPic]
    return (
        <>
            <div className="transition duration-100 fixed top-0 left-0 z-40 w-full h-full bg-black cursor-pointer opacity-90" onClick={closeModal}></div>
            <section className="transition duration-100 fixed top-[50%] left-[50%] p-16 ml-[-40vw] mt-[-45vh] z-50 w-[80vw] h-[90vh] bg-gradient-to-tr from-[#010101] to-[#252525]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={mainPic} alt="" width={400} className="inner drop-shadow-sm" />
                    </div>
                </div>
                {/* <div className="flex items-center justify-between py-16">
                    <Image src={arrowRight} alt="arrow-right" className="cursor-pointer hover:invert" />
                    <div className="lg:w-full flex items-center justify-between px-16">
                        <div className="">
                            <Image src={primePic1} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                        </div>
                        <div className="w-full">
                            <Image src={mainPic} alt="" width={200} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                        </div>
                        <div>
                            <Image src={primePic2} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                        </div>
                        <Image src={arrowLeft} alt="arrow-right" className="cursor-pointer hover:invert" />
                    </div>
                </div> */}

                {/* <Slider url={'#'} slidesPerView={3} image1={`${primePic1}`} image2={`${primePic2}`} image3={`${primePic1}`} image4={`${primePic2}`} /> */}
                <div className="p-20">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={70}
                        slidesPerView={3}
                        navigation
                        pagination
                        className="mySwiper text-white"
                    >
                        {images.map((img, index) => (
                            <>
                                <SwiperSlide>
                                    <Image src={img} key={index} alt="" width={400} className="inner drop-shadow-sm cursor-pointer hover:brightness-50 hover:scale-105 transition-all duration-300" />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default GalleryModal