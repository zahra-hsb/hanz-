import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import image1 from '../../../../public/image/Aluminium-life-cycle-3.jpg'
import image2 from '../../../../public/image/Aluminium-recyclability-4.jpg'
import image3 from '../../../../public/image/Aluminium-acoustic-insulation-2.jpg'
import image4 from '../../../../public/image/Aluminium-Safety-children-1.jpg'
import image5 from '../../../../public/image/about.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import DetailModal from "../DetailModal";

const HanzUnits = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isShowModal, setShowModal] = useState(false)
    const [HoveredIndex, setHoveredIndex] = useState(null);
    const [currentImage, setCurrentImage] = useState(null)

    // ? mobile view ?
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.addEventListener('resize', handleResize)
        };
    }, []);


    const handleClick = (image) => {
        if (isMobile) {
            setCurrentImage(image)
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }
    const closeModal = () => {
        setShowModal(false)
    }
    // ? desktop view ?
    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    const sliderItems = [
        { image: image1, text: 'واحد طراحی سیستم (SYSTEM DESIGN LINE)', detail: 'شرکت هانز افتخار دارد که به بهره مندی از تیم فنی مهندسی مجرب، بهترین و مدرن ترین سیستم های آلومینیومی پنجره و نما را برای سلیقه ای مختلف معماری،  طراحی و تولید نموده است.' },
        { image: image2, text: 'واحد اکستروژن (EXTRUSION LINE)', detail: 'شرکت هانز مجهز به خط تولید پرس اکستروژن 2500 تن با دبل پولر هوایی تمام اتوماتیک شرکت زیمنش آلمان و میز فول اتوماتیک انتقال پروفیل که مجهز به دستگاه استرج و دستگاه ایجنت القایی با قابلیت سختیگری پروفیل با آلیاژ 6063 تا 14 وبستر سختی را داراست.' },
        { image: image4, text: 'واحد رنگ پودری الکترواستاتیک (POWDER COATING LINE)', detail: 'واحد رنگ پودری شرکت هانز با بهره گیری از خط رنگ پودری شرکت ELFI ایتالیا به صورت  فول رباتیک قابلیت ارائه ی خدمات رنگ برای پروفیل های با طول 14 متر و با ضخامت 80 میکرون را داراست که تنوع و کیفیت رنگ های ارائه شده می تواند زیباترین پروفیل ها را با توجه به نظر و سلیقه ی مشتریان عزیز تامین می کند.' },
        { image: image5, text: 'واحد ترمال بریک (TERMAL BREAKING LINE)', detail: 'این واحد از شرکت هانز با استفاده از خط تخصصی ترمال بریک که دسنگاه آن از فناوری روز دنیا و از برند برتر سوئیسی Herman Muller تامین شده است، آماده ارائه خدمات ترمال بریک با نکنیک کنگره زنی منحصر به فرد و مونتاژ نمودن تیفه های پلی آمیدی با کیفیت بالا می باشد.' },
        { image: image1, text: 'واحد مونتاژ (ASSEMBLING LINE)', detail: 'در این بخش از شرکت با بهره گیری از نیروهای کارآزموده، دقیق و جوان با کمک خط تولید شرکت FOUM ایتالیا افدام به تولید پنجره و انواع نماهای نوین ساختمانی با بالاترین استاندارد و کیفیت روز در جهت جلب نظر هرچه بیشتر مشتریان عزیز می نماییم.' },
    ]
    return (
        <>
            <section className="relative flex flex-col pt-5 w-full my-20">
                <div className="flex w-full lg:w-[90%] lg:m-auto flex-col lg:flex-row items-center justify-between">
                    <div className="w-full">

                        <div className="mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
                            <div>
                                <h2>معرفی واحد های هانز</h2>
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
                            {sliderItems.map((item, index) => (
                                <>
                                    <SwiperSlide>
                                        <div onClick={() => handleClick(item.image)} className={`relative transform transition-all duration-500 ease-in-out cursor-pointer ${HoveredIndex === index ? 'transform' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <Image src={item.image} alt="" key={index} className="w-full" />
                                            <div className={`backdrop-blur-lg flex items-center justify-start absolute top-0 bottom-0 group-hover: group-hover:z-10 p-5 transition-all ease-in-out duration-500 ${HoveredIndex === index ? 'block opacity-8  0 z-10 transform' : 'opacity-0'}`}>
                                                <p className="text-white text-justify text-xs sm:text-md leading-5 font-normal">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-4 mb-6 text-xs sm:text-sm text-gray-600">{item.text}</p>
                                    </SwiperSlide>
                                    {isShowModal ? <DetailModal closeModal={closeModal} image={sliderItems.find((item) => item.image === currentImage).image} text={item.detail} title={item.text} /> : console.log('ajhdjkahsdha')}

                                </>
                            ))}

                        </Swiper>
                    </div>
                </div>
                {/* {isShowModal && <DetailModal closeModal={closeModal}/>} */}
            </section>
        </>
    )
}

export default HanzUnits