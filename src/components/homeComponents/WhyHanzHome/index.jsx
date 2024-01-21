import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'
// import cashOnDelivery from '../../../../public/icons/cash-on-delivery.svg'


const WhyHanzHome = () => {
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
                        <Slider url={'/about'} slidesPerView={3} image1={hanzProfile1} image2={hanzProfile3} image3={hanzProfile2} image4={hanzProfile3} textSlider={true} textSlider1={'صرفه جویی در زمان'} textSlider2={'زمان بندی مناسب'} textSlider3={'صرفه جویی در هزینه حمل و نقل'} textSlider4={'تعهد'} sliderCount={''} />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default WhyHanzHome; 
