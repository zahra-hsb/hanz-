import { useState } from 'react';
import Image from 'next/image'
import Banner from '../../../../public/image/cuh_banner.png'
import image6 from '../../../../public/image/image 6.svg'
import image7 from '../../../../public/image/image 7.svg'
import image8 from '../../../../public/image/image 8.svg'

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BigSlider = ({ slidesPerView, textSlider, textSlider1, textSlider2, textSlider3, textSlider4 }) => {
    const [textShow, setTextShow] = useState(textSlider)
    // SwiperCore.use([Autoplay]);
    return (
        <section classNameName='w-full relative'>

            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        // width: 0,
                        slidesPerView: 1.7,
                    },
                    576: {
                        // width: 576,
                        slidesPerView: 2.3,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 3.3,
                    },
                }}
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
                    <Image src={image6} className='w-full pb-4' />
                    {textShow && <p className='text-sm text-gray-600'>{textSlider1}</p>}
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={image7} className='w-full pb-4' />
                    {textShow && <p className='text-sm text-gray-600'>{textSlider2}</p>}
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={image8} className='w-full pb-4' />
                    {textShow && <p className='text-sm text-gray-600'>{textSlider3}</p>}
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={image7} className='w-full pb-4' />
                    {textShow && <p className='text-sm text-gray-600'>{textSlider4}</p>}
                </SwiperSlide>


            </Swiper>
        </section>
    )
}

export default BigSlider