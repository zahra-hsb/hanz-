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
            <Image src={image} className='w-full pb-4' />
            <p className='text-xs sm:text-sm text-gray-600'>{textSlider}</p>
        </>
    )
}

const BigSlider = ({ slidesPerView, image1, image2, image3, textSlider, textSlider1, textSlider2, textSlider3, textSlider4, banner }) => {
    const [textShow, setTextShow] = useState(textSlider)

    const slides = [
        { image: image1, text: textSlider1 },
        { image: image2, text: textSlider2 },
        { image: image3, text: textSlider3 },
        { image: image2, text: textSlider4 }
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

    return (
        <section classNameName='w-full relative'>

            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={breakpoints}
                slidesPerView={slidesPerView}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {textShow ? (
                            <Link href='/galleryImage'>
                                {createElem(slide.image, slide.text)}
                            </Link>
                        ) : (
                            createElem(banner)
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}

export default BigSlider