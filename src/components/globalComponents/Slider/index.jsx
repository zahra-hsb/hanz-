import { useState } from 'react';
import Image from 'next/image'
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function createElem(image, textSlider) {
    return (
        <>
            <div className='overflow-hidden'>
                <Image src={image} className='w-full transition duration-300 ease-in-out hover:scale-105' alt='hanz' />
            </div>
            <p className='text-xs sm:text-sm text-gray-600 pt-4'>{textSlider}</p>
        </>
    )
}

const Slider = ({ url, slidesPerView, image1, image2, image3, image4, image5, textSlider, textSlider1, textSlider2, textSlider3, textSlider4, textSlider5, banner }) => {
    const [textShow, setTextShow] = useState(textSlider)

    const slides = [
        { image: image1, text: textSlider1 },
        { image: image2, text: textSlider2 },
        { image: image3, text: textSlider3 },
        { image: image4, text: textSlider4 }
    ]

    let breakpoints = {}

    if (textShow) {
        breakpoints = {
            0: {
                slidesPerView: 1.7,
            },
            576: {
                slidesPerView: 2.3,
            },
            768: {
                slidesPerView: 3,
            },
        };
    } else {
        breakpoints = {
            slidesPerView: 1,
        };
    }

    let scrollbar = {}

    textShow ? scrollbar = { draggable: false } : scrollbar = { draggable: true }


    return (
        <section className='w-full relative'>

            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={breakpoints}
                slidesPerView={slidesPerView}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={scrollbar}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {textShow ? (
                            <Link href={`${url}`}>
                                {createElem(slide.image, slide.text)}
                            </Link>
                        ) : (
                            <Link href={`${url}`}>
                                {createElem(banner)}
                            </Link>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}

export default Slider