import time from "../../../public/icons/about/time-svgrepo-com.svg"
import timeCheck from "../../../public/icons/about/time-check-svgrepo-com.svg"
import medal from "../../../public/icons/about/medal-ribbon-star-svgrepo-com.svg"
import dollar from "../../../public/icons/about/dollar-circle-list-svgrepo-com.svg"
import Image from "next/image"

const icons = [
    { image: time, text: 'صرفه جویی در زمان' },
    { image: timeCheck, text: 'زمان بندی مناسب' },
    { image: medal, text: 'تعهد' },
    { image: dollar, text: 'صرفه جویی در هزینه حمل و نقل' },
]


const WhyHanzCarousel = () => {
    return (
        <>
            <div className="" id="">
                {/* <Slider url={''} slidesPerView={5} slides={icons} textSlider={true} textColor={'mb-5'} id={'about-icons'} /> */}

                <div className="bg-gray-100 rounded-lg mx-4 sm:mx-0">
                    <div class="container px-6 mx-auto grid">
                        {/* <h2 class="my-6 text-2xl font-semibold text-gray-700">
                            چرا هانز
                        </h2> */}

                        <div class="grid gap-6 my-8 md:grid-cols-2 xl:grid-cols-4">
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div class="py-[10px] ml-2 text-blue-500 bg-blue-100 rounded-full">
                                    <Image src={medal} alt="" width={40} height={35} />
                                </div>
                                <div>
                                    <p class=" text-sm font-medium text-gray-600">
                                        کیفیت عالی محصولات هانز
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div class="py-[10px] ml-4 text-green bg-[#ccfbf1] rounded-full">
                                    <Image src={timeCheck} alt="" width={40} height={35} />

                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        هانزبه مشتریان خود متعهد است
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div class="p-[10px] ml-4 text-red-500 bg-gray-200 rounded-full">
                                    <Image src={time} alt="" width={20} height={20} />
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        سرعت بالای تحویل محصولات و صرفه جویی در زمان
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div
                                    class="p-[10px] ml-4 text-yellow-500 bg-[#eafffa] rounded-full">
                                    <Image src={dollar} alt="" width={25} height={25} />
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        حمل و نقل با کیفیت با حداقل هزینه در هانز
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div
                                    class="p-[10px] ml-4 text-yellow-500 bg-yellow-100 rounded-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>headphone</title><path d="M14.83 18h1.756l1.707-1.707a1 1 0 0 1 1.414 1.414l-2 2A1 1 0 0 1 17 20h-2.17a3.001 3.001 0 1 1 0-2zM4.182 8C5.085 4.519 8.273 2 12 2c3.727 0 6.915 2.519 7.817 6H21a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 .739-.966C16.911 5.671 14.637 4 12 4S7.089 5.67 6.261 8.034A1 1 0 0 1 7 9v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.183zM19 10v3h1v-3h-1zM4 10v3h1v-3H4zm8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#000" fill-rule="nonzero" /></svg>
                                    {/* <Image src={dollar} alt="" width={40} height={35} /> */}
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        مشاوره ی فنی و پشتیبانی در هانز
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyHanzCarousel