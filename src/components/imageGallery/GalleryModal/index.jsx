"use client";
import Image from "next/image"
import mainPic from "../../../../public/image/Modiriyat-WEBSITE.jpg"
import primePic1 from "../../../../public/image/Sales-Manager-WEBSITE.jpg"
import primePic2 from "../../../../public/image/sales-manager-WEBSITE-1.jpg"



import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";



const GalleryModal = ({ closeModal, opacity, wraperOpacity, galleryProp }) => {
    const images = [mainPic, primePic1, primePic2, primePic1, primePic2, primePic1, mainPic]
    const [isOpen, setOpen] = useState(false)
    galleryProp.map(g => console.log('gallery prop : ', g))
    
    function openPic() {
        setOpen(true)
    }
    return (
        <>
            <div className={`${wraperOpacity} transition duration-500 ease-in-out fixed top-0 left-0 z-40 w-full h-full bg-black cursor-pointer`} onClick={closeModal}></div>
            <section className={`${opacity} transition duration-500 ease-in-out fixed top-[50%] left-[50%] p-16 ml-[-40vw] mt-[-45vh] w-[80vw] h-[90vh] bg-gradient-to-tr from-[#010101] to-[#252525]`}>
                <div className="flex items-center justify-center">
                    <div>
                        {isOpen && <Image src={mainPic} alt="" width={400} className="inner drop-shadow-sm" /> }
                        
                    </div>
                </div>


                <div className="p-20">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={70}
                        slidesPerView={3}
                        navigation
                        pagination
                        className="mySwiper text-white"
                    >
                        {galleryProp.map((img, index) => (
                            <>
                                <SwiperSlide>
                                    <Image src={img} key={index} alt="" width={400} className="inner drop-shadow-sm cursor-pointer hover:brightness-50 hover:scale-105 transition-all duration-300" onClick={() => openPic()} />
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