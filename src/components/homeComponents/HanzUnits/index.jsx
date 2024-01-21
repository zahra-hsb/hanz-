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

const HanzUnits = () => {
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
                                <div className="relative">
                                    <Image src={item.image} alt="" key={index} className="hover:rotate-180 group" />
                                    <div className="bg-green absolute top-0 hidden group-hover:block group-hover:z-10">
                                        <p>
                                            شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب
                                            و جوان کارآزموده با و با تکیه بر بررسی نیازهای بازار اقدام
                                            به طراحی و ساخت سیستم های مدرن و نوین در بخش صنعت
                                            ساختمان به خصوص نماهای مدرن و نوین ساختمان جهت
                                            پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                                        </p>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        </>
                    ))}

                </Swiper>
            </section>
        </>
    )
}

export default HanzUnits