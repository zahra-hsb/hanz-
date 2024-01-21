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
        { image: image1, text: 'واحد طراحی سیستم (SYSTEM DESIGN LINE)', detail: 'شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب و جوان کارآزموده با و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمان جهتپاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.' },
        { image: image1, text: 'واحد اکستروژن (EXTRUSION LINE)', detail: 'شرکت هانز مجهز به یک دستگاه پرس 2500 تن اکستروژن با دبل پولر هوایی فول اتوماتیک از شرکت زیمنس آلمان و میز فول اتوماتیک انتقال پروفیل و قسمت استرج و دستگاه ایجینگ القایی با قابلیت سختکاری پروفیل با آلیاژ 6063 تا 14 وبستر سختی را داراست' },
        { image: image1, text: 'واحد رنگ دکورال (WOODEN POWDER COATING LINE)', detail: 'شرکت هانز با دارا بودن خط کامل دکورال از شرکت migrolio ایتالیا امکان ارائه ی پروفیل های آلومینیومی با حس لمس چوب و با کیفیت بالا و طرح و رنگ های متنوع را داراست.' },
        { image: image1, text: 'واحد رنگ پودری الکترواستاتیک (POWDER COATING LINE)', detail: 'واحد رنگ پودری الکترواستاتیک شرکت هانز با بهذه گیری از خط رنگ آمیزی پودری شرکت ELFI ایتالیا به صورت فول رباتیک قابلیت ارائه خدمات رنگ برای پروفیل های با طول تا 14 متر و با ضخامت 80 میکرون را داراست که تنوع و کیفیت رنگ های ارائه شده می تواند زیباترین پروفیل ها را با توجه به انواع سلیقه و نظر مشتریان عزیز تامین کند.' },
        { image: image1, text: 'واحد ترمال بریک (TERMAL BREAKING LINE)', detail: 'این واحد از شرکت هانز با استفاده از خط تخصصی ترمال بریک که دسنگاه آن از فناوری روز دنیا و از برند برتر سوئیسی Herman Muller تامین شده است، آماده ارائه خدمات ترمال بریک با نکنیک کنگره زنی منحصر به فرد و مونتاژ نمودن تیفه های پلی آمیدی با کیفیت بالا می باشد.' },
        { image: image1, text: 'واحد مونتاژ (ASSEMBLING LINE)', detail: 'در این بخش از شرکت با بهره گیری از نیروهای کارآزموده، دقیق و جوان با کمک خط تولید شرکت FOUM ایتالیا افدام به تولید پنجره و انواع نماهای نوین ساختمانی با بالاترین استاندارد و کیفیت روز در جهت جلب نظر هرچه بیشتر مشتریان عزیز می نماییم.' },
        { image: image1, text: 'واحد رنگ آنادایز (ANODIZING LINE)', detail: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.' },
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
                            breakpoints={{
                                0: { slidesPerView: 1.7 },
                                576: { slidesPerView: 2.3 },
                                768: { slidesPerView: 3 }
                            }}
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
                                            <div className={`bg-gray-600 absolute top-0 bottom-0 group-hover: group-hover:z-10 p-5 transition-all ease-in-out duration-500 ${HoveredIndex === index ? 'block opacity-8  0 z-10 transform' : 'opacity-0'}`}>
                                                <p className="text-white text-justify text-sm sm:text-md font-normal">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-8 text-xs sm:text-sm text-gray-600">{item.text}</p>
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