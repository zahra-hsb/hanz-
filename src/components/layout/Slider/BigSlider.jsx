import Image from 'next/image'
import Banner from '../../../../public/image/cuh_banner.png'

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BigSlider = () => {
    // SwiperCore.use([Autoplay]);
    return (
        <section classNameName='w-full relative'>

            <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                <SwiperSlide><Image src={Banner} className='w-full' /></SwiperSlide>
                <SwiperSlide><Image src={Banner} className='w-full' /></SwiperSlide>
                <SwiperSlide><Image src={Banner} className='w-full' /></SwiperSlide>
                <SwiperSlide><Image src={Banner} className='w-full' /></SwiperSlide>

            </Swiper>
        </section>
    )
}

export default BigSlider