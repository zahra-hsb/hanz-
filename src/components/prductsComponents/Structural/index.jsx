import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

const Structural = ({ items = [], subCategory }) => {
    
    // const [HoveredIndex, setHoveredIndex] = useState(null);

    // const handleMouseEnter = (index) => {
    //     setHoveredIndex(index)
    // }

    // const handleMouseLeave = () => {
    //     setHoveredIndex(null)
    // }
    return (
        <>
            <div className="w-[90%] sm:w-[100%] m-auto my-10">
                <div className="mt-20 mb-10 text-gray-600">
                    <div>
                        <h4 className="text-2xl opacity-[76%]">
                            {subCategory}
                        </h4>
                    </div>
                </div>
                <div>
                    <p className="lg:w-5/6 text-justify text-gray-600 text-lg">
                        در شرکت ما تجهیزات ساختمانی باکیفیت توسط نیروی های ما ساخته می شود.
                    </p>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    576: { slidesPerView: 2.2 },
                    768: { slidesPerView: 3 }
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {items.map((item, index) => (
                    <>
                        <SwiperSlide>
                            <div className={`relative overflow-hidden transform transition-all duration-500 ease-in-out cursor-pointer`}>
                                <Image src={item.image} alt="" key={index} className="w-full hover:scale-105 transition-all duration-300" />
                                {/* <div className={`backdrop-blur-lg flex items-center justify-start absolute top-0 bottom-0 group-hover: group-hover:z-10 p-5 transition-all ease-in-out duration-500 ${HoveredIndex === index ? 'block opacity-8  0 z-10 transform' : 'opacity-0'}`}> */}
                                {/* <p className="text-white text-justify text-xs sm:text-md leading-5 font-normal">
                    {item.text}
                  </p> */}
                                {/* </div> */}
                            </div>
                            <p className="mt-4 mb-10 text-xs sm:text-lg text-center text-gray-600">{item.text}</p>
                        </SwiperSlide>

                    </>
                ))}

            </Swiper>
        </>
    )
}

export default Structural