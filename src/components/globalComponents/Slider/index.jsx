import { useState } from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function createElem(image, textSlider, textColor, id) {
    return (
        <>
            <div className='overflow-hidden'>
                <Image src={image} id={id} className='w-full transition duration-300 ease-in-out hover:scale-105' alt='hanz' />
            </div>
            <p className={`${textColor} text-xs sm:text-sm pt-4`} id={id}>{textSlider}</p>
        </>
    );
}

const Slider = ({ url, slidesPerView = 1, slides = [], textSlider, banner, textColor, id }) => {
    const [textShow, setTextShow] = useState(textSlider);

    console.log(slides)

    const breakpoints = textShow ? {
        0: { slidesPerView: 1.2 },
        576: { slidesPerView: 2.2 },
        768: { slidesPerView: 3 }
    } : { slidesPerView: 1 };

    const scrollbar = textShow ? { draggable: false } : { draggable: true };

    return (
        <section className='w-full relative'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={breakpoints}
                slidesPerView={slidesPerView}
                navigation
                scrollbar={scrollbar}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            {/* {createElem(slide.image, slide.text || textSlider)} */}
                            {textShow ? (
                                <Link href={`${url}`}>
                                    {createElem(slide.image, slide.text, textColor, id)}
                                </Link>
                            ) : (
                                <Link href={`${url}`}>
                                    {createElem(banner)}
                                </Link>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;





