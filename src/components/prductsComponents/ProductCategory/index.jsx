
import 'swiper/css';
import 'swiper/css/pagination';

import Slider from "@/components/globalComponents/Slider";
import Button from "@/components/globalComponents/Main/button";

const ProductCategory = ({ items = [], subCategory, text, url }) => {
    const slides = [
        { image: items[0].image, text: items[0].text },
        { image: items[1].image, text: items[1].text },
        { image: items[2].image, text: items[2].text },
        { image: items[1].image, text: items[1].text }
    ]

    // const [HoveredIndex, setHoveredIndex] = useState(null);

    // const handleMouseEnter = (index) => {
    //     setHoveredIndex(index)
    // }

    // const handleMouseLeave = () => {
    //     setHoveredIndex(null)
    // }
    return (
        <>
            <div className="w-[90%] sm:w-[100%] m-auto my-10">
                <div className="mt-20 mb-10 text-gray-600">
                    <div>
                        <h4 className="text-2xl text-center sm:text-start opacity-[76%]">
                            {subCategory}
                        </h4>
                    </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-1">
                    <p className="sm:w-5/6 text-justify text-gray-600 text-md">
                        {text}
                    </p>
                    <Button url={`/products/${url}`} title={'بیشتر'} hover={'hover:bg-green hover:text-white sm:'} border={'border-2 border-green !mt-0'}/>
                </div>
            </div>

            <Slider
                url={`/products/${url}`}
                slidesPerView={3}
                slides={items}
                textSlider={true}
                textColor={'text-gray-600'}
            />
            {/* <Swiper
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
            > */}
                {/* {items.map((item, index) => (
                    <>
                        <SwiperSlide>
                            <div className={`relative overflow-hidden transform transition-all duration-500 ease-in-out cursor-pointer`}>
                                <Image src={item.image} alt="" key={index} className="w-full hover:scale-105 transition-all duration-300" /> */}
                                {/* <div className={`backdrop-blur-lg flex items-center justify-start absolute top-0 bottom-0 group-hover: group-hover:z-10 p-5 transition-all ease-in-out duration-500 ${HoveredIndex === index ? 'block opacity-8  0 z-10 transform' : 'opacity-0'}`}> */}
                                {/* <p className="text-white text-justify text-xs sm:text-md leading-5 font-normal">
                    {item.text}
                  </p> */}
                                {/* </div> */}
                            {/* </div>
                            <p className="mt-4 mb-10 text-xs sm:text-lg text-center text-gray-600">{item.text}</p>
                        </SwiperSlide>

                    </>
                ))} */}

            {/* </Swiper> */}
        </>
    )
}

export default ProductCategory