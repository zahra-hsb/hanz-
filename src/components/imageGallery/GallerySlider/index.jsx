
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useState } from "react";


const GallerySlider = ({galleryProp, changePic}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            // pagination
            breakpoints={{
                0: {
                    slidesPerView: 1.7,
                },
                576: {
                    slidesPerView: 2.3,
                },
                768: {
                    slidesPerView: 3,
                }
            }}
            className="mySwiper text-white"
        >
            {galleryProp.map((img, index) => (
                <>
                    <SwiperSlide>
                        <Image src={img} key={index} alt="" width={300} className="sm:w-[180px] inner drop-shadow-sm cursor-pointer hover:brightness-50 hover:scale-105 transition-all duration-300" onClick={() => changePic(img)} />
                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    )
}

export default GallerySlider