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
                                <div class="py-[11px] ml-2 text-blue-500 bg-blue-100 rounded-full">
                                    {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg> */}
                                    <Image src={time} alt="" width={40} height={35} />
                                </div>
                                <div>
                                    <p class=" text-sm font-medium text-gray-600">
                                        کیفیت عالی محصولات هانز
                                    </p>
                                    {/* <p class="text-lg font-semibold text-gray-700">
                                        19238
                                    </p> */}
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div class="py-[10px] ml-4 text-green bg-[#ccfbf1] rounded-full">
                                    {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg> */}
                                    <Image src={timeCheck} alt="" width={40} height={35} />

                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        هانزبه مشتریان خود متعهد است
                                    </p>
                                    {/* <p class="text-lg font-semibold text-gray-700">
                                        120
                                    </p> */}
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div class="py-[10px] ml-4 text-red-500 bg-red-100 rounded-full">
                                    {/* <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                                        </path>
                                    </svg> */}
                                    <Image src={medal} alt="" width={40} height={35} />
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        سرعت بالای تحویل محصولات و صرفه جویی در زمان
                                    </p>
                                    {/* <p class="text-lg font-semibold text-gray-700">
                                        6389
                                    </p> */}
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div
                                    class="py-[10px] ml-4 text-yellow-500 bg-yellow-100 rounded-full">
                                    {/* <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg> */}
                                    <Image src={dollar} alt="" width={50} height={35} />
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        حمل و نقل با کیفیت با حداقل هزینه در هانز
                                    </p>
                                    {/* <p class="text-lg font-semibold text-gray-700">
                                        828
                                    </p> */}
                                </div>
                            </div>
                            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div
                                    class="py-[10px] ml-4 text-yellow-500 bg-yellow-100 rounded-full">
                                    {/* <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg> */}
                                    <Image src={dollar} alt="" width={50} height={35} />
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600">
                                        حمل و نقل با کیفیت با حداقل هزینه در هانز
                                    </p>
                                    {/* <p class="text-lg font-semibold text-gray-700">
                                        828
                                    </p> */}
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