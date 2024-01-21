import Slider from "@/components/globalComponents/Slider"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HanzUnits = () => {
    const sliderItems = [
        { image: '', text: 'واحد طراحی سیستم (SYSTEM DESIGN LINE)' },
        { image: '', text: 'واحد اکستروژن (EXTRUSION LINE)' },
        { image: '', text: 'واحد رنگ دکورال (WOODEN POWDER COATING LINE)' },
        { image: '', text: 'واحد رنگ پودری الکترواستاتیک (POWDER COATING LINE)' },
        { image: '', text: 'واحد ترمال بریک (TERMAL BREAKING LINE)' },
        { image: '', text: 'واحد مونتاژ (ASSEMBLING LINE)' },
        { image: '', text: 'واحد رنگ آنادایز (ANODIZING LINE)' },
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
                                <Image src={item.image} alt="" key={index}/>
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