"use client";
import Image from "next/image"



import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useState } from "react";



const GalleryModal = ({ mainPic, closeModal, opacity, wraperOpacity, galleryProp }) => {

    const [picture, setChange] = useState(mainPic)
    
    function changePic(img) {
        setChange(img)
    }
    return (
        <>
            <div className={`${wraperOpacity} transition duration-500 ease-in-out fixed top-0 left-0 z-40 w-full h-full bg-black`} onClick={closeModal}>
            </div>
                <span className="w-[15px] fixed top-0 right-0 z-50 p-10 text-4xl text-white cursor-pointer hover:text-red" onClick={closeModal}>
                    <span className="rotate-45 flex hover:text-red">+</span>
                </span>
            <section className={`${opacity} rounded-md transition duration-500 ease-in-out fixed sm:top-[50%] top-[15vh] sm:left-[50%] p-16 sm:ml-[-40vw] sm:mt-[-45vh] w-[90%] sm:w-[80vw] sm:h-[90vh] bg-white`}>
                <div className="flex items-center justify-center">
                    <div>
                        {picture && <Image src={picture} alt="" width={400} className="inner drop-shadow-lg cursor-zoom-in rounded" />  }
                        
                    </div>
                </div>


                <div className="p-20">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        // pagination
                        className="mySwiper text-white"
                    >
                        {galleryProp.map((img, index) => (
                            <>
                                <SwiperSlide>
                                    <Image src={img} key={index} alt="" width={400} className="inner drop-shadow-sm cursor-pointer hover:brightness-50 hover:scale-105 transition-all duration-300" onClick={() => changePic(img)} />
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