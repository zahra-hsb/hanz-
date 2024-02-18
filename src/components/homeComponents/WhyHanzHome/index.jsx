import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'
import Button from "@/components/globalComponents/Main/button";
import WhyHanzCard from '@/components/WhyHanzCard'
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
                    <div className="bg-gray-100 rounded-lg mx-2 sm:mx-0">
                        <div className="sm:px-6 mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
                            {/* <div>
                                <h2>چرا هانز</h2>
                            </div> */}
                            <div className="flex w-full flex-col lg:flex-row items-center justify-between">
                                {/* <div>
                                    <Image src={picture} alt="hanz" />
                                </div> */}
                                <div className="pt-8 w-full">
                                    <div className="flex justify-between items-center">
                                        <h4 className="sm:text-2xl opacity-[85%]">
                                            چرا گروه
                                            <span className="text-3xl sm:text-5xl text-green opacity-1"> هانز</span>
                                        </h4>
                                        <div>
                                            <Button title={'درباره ما'} url={'/about'} border={'border-2 border-green !text-xs sm:!text-md'} hover={'hover:bg-green hover:text-white'} />
                                        </div>
                                    </div>
                                    <div className="lg:w-[60%]">
                                        <p className="pt-5 lg:w-5/6 text-justify opacity-[75%] text-lg">
                                            شرکت هانز یکی از معتبرترین شرکت های طراحی و تولیدی سیستم های آلومینیمی کشور است که تجربه ی دیرینه ای درتولید مقاطع آلومینیومی دارد.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            <WhyHanzCard />
                        </div>

                        {/* <div id="WhyHanzHome-carousel" className="w-full">
                        <Slider
                            url='/about'
                            slidesPerView={3}
                            slides={slides}
                            textSlider={true}
                            textColor={'text-gray-600'}
                        />
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyHanzHome; 
