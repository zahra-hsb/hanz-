import { useState } from 'react';
import Image from 'next/image'
import image6 from '../../../../public/image/image 6.svg'
import image7 from '../../../../public/image/image 7.svg'
import image8 from '../../../../public/image/image 8.svg'

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function createElem(image6, textSlider1) {
    return (
        <>
            <Image src={image6} className='w-full pb-4' />
            <p className='text-sm text-gray-600'>{textSlider1}</p>
        </>
    )
}

const BigSlider = ({ slidesPerView, textSlider, textSlider1, textSlider2, textSlider3, textSlider4, banner }) => {
    const [textShow, setTextShow] = useState(textSlider)
    // SwiperCore.use([Autoplay]);
    let breakpoints = {}

    if (textShow) {
        breakpoints = {
            0: {
                0: {
                    slidesPerView: 1.7,
                },
                576: {
                    slidesPerView: 2.3,
                },
                768: {
                    slidesPerView: 3,
                },
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
                // navigation
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
                <SwiperSlide>
                    {textShow ? (
                        createElem(image6, textSlider1)
                    ) : (
                        createElem(banner)
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {textShow ? (
                        createElem(image7, textSlider2)
                    ) : (
                        createElem(banner)
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {textShow ? (
                        createElem(image8, textSlider3)
                    ) : (
                        createElem(banner)
                    )}
                </SwiperSlide>

                <SwiperSlide>
                    {textShow ? (
                        createElem(image7, textSlider4)
                    ) : (
                        createElem(banner)
                    )}
                </SwiperSlide>


            </Swiper>
        </section >
    )
}

export default BigSlider