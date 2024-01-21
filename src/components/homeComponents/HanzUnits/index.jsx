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
            <section>
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
                                <div className={`relative cursor-pointer ${HoveredIndex === index ? 'hover:rotate-180' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}>
                                    <Image src={item.image} alt="" key={index} />
                                    <div className={`bg-green absolute top-0 bottom-0 group-hover: group-hover:z-10 ${HoveredIndex === index ? 'block z-10 rotate-180' : 'hidden'}`}>
                                        <p className="text-white">
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
            </section>
        </>
    )
}

export default HanzUnits