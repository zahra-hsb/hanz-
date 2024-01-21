import Slider from "@/components/globalComponents/Slider"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import image1 from '../../../../public/image/Aluminium-life-cycle-3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from "react";

const HanzUnits = () => {
    const [HoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    const sliderItems = [
        { image: image1, text: 'واحد طراحی سیستم (SYSTEM DESIGN LINE)' },
        { image: image1, text: 'واحد اکستروژن (EXTRUSION LINE)' },
        { image: image1, text: 'واحد رنگ دکورال (WOODEN POWDER COATING LINE)' },
        { image: image1, text: 'واحد رنگ پودری الکترواستاتیک (POWDER COATING LINE)' },
        { image: image1, text: 'واحد ترمال بریک (TERMAL BREAKING LINE)' },
        { image: image1, text: 'واحد مونتاژ (ASSEMBLING LINE)' },
        { image: image1, text: 'واحد رنگ آنادایز (ANODIZING LINE)' },
    ]
    return (
        <>
            <section className="flex flex-col pt-5 w-full my-20">
                <div className="flex w-full lg:w-[90%] lg:m-auto flex-col lg:flex-row items-center justify-between">
                    <div className="w-full">

                        <div className="mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
                            <div>
                                <h2>معرفی واحد های هانز</h2>
                            </div>

                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {sliderItems.map((item, index) => (
                                <>
                                    <SwiperSlide>
                                        <div className={`relative transform transition-all duration-500 ease-in-out cursor-pointer ${HoveredIndex === index ? 'transform' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <Image src={item.image} alt="" key={index} className="w-full" />
                                            <div className={`bg-gray-600 absolute top-0 bottom-0 group-hover: group-hover:z-10 p-5 transition-all ease-in-out duration-500 ${HoveredIndex === index ? 'block opacity-1 z-10 transform' : 'opacity-0'}`}>
                                                <p className="text-white text-justify text-md font-normal">
                                                    شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب
                                                    و جوان کارآزموده با و با تکیه بر بررسی نیازهای بازار اقدام
                                                    به طراحی و ساخت سیستم های مدرن و نوین در بخش صنعت
                                                    ساختمان به خصوص نماهای مدرن و نوین ساختمان جهت
                                                    پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                                                </p>
                                            </div>
                                        </div>
                                        <p>{item.text}</p>
                                    </SwiperSlide>
                                </>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HanzUnits