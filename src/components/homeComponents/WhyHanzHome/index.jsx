import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'
// import cashOnDelivery from '../../../../public/icons/cash-on-delivery.svg'


const WhyHanzHome = () => {
    const slides = [
        { image: hanzProfile1, text: 'صرفه جویی در زمان' },
        { image: hanzProfile3, text: 'زمان بندی مناسب' },
        { image: hanzProfile2, text: 'صرفه جویی در هزینه حمل و نقل' },
        { image: hanzProfile3, text: 'تعهد' }
    ]

    return (
        <section className="flex flex-col pt-5 w-full my-20">
            <div className="flex w-full lg:w-[90%] lg:m-auto flex-col lg:flex-row items-center justify-between">

                <div className="w-full">
                    <div className="mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
                        <div>
                            <h2>چرا هانز</h2>
                        </div>

                    </div>

                    <div id="WhyHanzHome-carousel" className="w-full">
                        <Slider
                            url='/about'
                            slidesPerView={3}
                            slides={slides}
                            textSlider={true}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyHanzHome; 
