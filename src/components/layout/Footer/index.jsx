import Image from 'next/image'
import Logo from '../.../../../../../public/icons/hanz-logo-white.png'
const Footer = () => {
    return (
        <>
            <footer className="flex flex-col w-full bg-green text-white pt-12 pb-6 px-10 lg:px-[110px] leading-8">
                <div className="flex justify-between flex-wrap m-auto">
                    <div className='w-[130px] mb-12'>
                        <div>
                            <Image src={Logo} alt="logo" />
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap basis-[100%]">
                        <div className='mb-8 ml-2 sm:ml-0'>
                            <div>
                                <h2 className="font-extrabold sm:text-xl">محصولات</h2>
                            </div>
                            <div className='pt-4 text-sm sm:text-lg'>
                                <ul>
                                    <li className='py-2'>پنجره</li>
                                    <li className='py-2'>کشویی و تاشو</li>
                                    <li className='py-2'>درب</li>
                                    <li className='py-2'>درب</li>
                                </ul>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <div>
                                <h2 className="font-extrabold sm:text-xl">تماس با ما</h2>
                            </div>
                            <div>
                                <ul className='pt-4 text-sm sm:text-lg'>
                                    <li className='py-2'>شماره تماس: 02188871502</li>
                                    <li className='py-2'>پست الکترونیکی : info@shayco.net</li>
                                    <li className='py-2'>دفتر مرکزی: تهران، بزرگراه شهید همت، <br />خیابان توانیر شمالی، پلاک 27، واحد، 2​</li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:ml-40'>
                            <div>
                                <h2 className="font-extrabold sm:text-xl">ما را دنبال کنید:</h2>
                            </div>
                            <div>
                                <ul className='pt-4 text-sm sm:text-lg flex justify-between'>
                                    <li className='ml-2 w-[28px] h-[28px] border-[1px] rounded-full flex justify-center items-center'>
                                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.59222 0.425501C3.84855 0.425501 2.82323 1.34555 2.82323 3.4422V5.28672H0.611572V7.49838H2.82323V12.8064H5.03489V7.49838H6.80421L7.24654 5.28672H5.03489V3.81376C5.03489 3.02199 5.29144 2.62831 6.03013 2.62831H7.24212V0.505121C7.0298 0.474158 6.41938 0.412231 5.58338 0.412231L5.59222 0.425501Z" fill="white"></path>
                                        </svg>
                                    </li>
                                    <li className='ml-2 w-[28px] h-[28px] border-[1px] rounded-full flex justify-center items-center'>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.20497 0.144262C2.43343 0.144262 0.985352 1.59234 0.985352 3.35891V7.86737C0.985352 9.63393 2.43343 11.082 4.2 11.082H8.70846C10.475 11.082 11.9231 9.62895 11.9231 7.86239V3.34895C11.9231 1.57742 10.47 0.129333 8.70348 0.129333L4.20497 0.144262ZM4.20497 1.13951H8.71344C9.94256 1.13951 10.9328 2.12978 10.9328 3.35891V7.86737C10.9328 9.0965 9.93759 10.0868 8.70846 10.0868H4.19502C2.96091 10.0868 1.97064 9.09152 1.97064 7.86239V3.34895C1.97064 2.11485 2.96091 1.12458 4.19004 1.12458L4.20497 1.13951ZM9.39518 2.22433C9.14139 2.22433 8.94234 2.42337 8.94234 2.67219C8.94234 2.921 9.14139 3.12005 9.3902 3.12005C9.63901 3.12005 9.83806 2.91602 9.83806 2.66721C9.83806 2.41342 9.63404 2.21437 9.38523 2.21437L9.39518 2.22433ZM6.45423 2.6274C4.8071 2.6274 3.46849 3.96601 3.46849 5.61314C3.46849 7.25529 4.8071 8.59887 6.45423 8.59887C8.09638 8.59887 9.43996 7.25529 9.43996 5.61314C9.43996 3.96601 8.09638 2.6274 6.45423 2.6274ZM6.45423 3.62265C7.55895 3.62265 8.44472 4.50344 8.44472 5.61314C8.44472 6.71786 7.55895 7.60363 6.45423 7.60363C5.34453 7.60363 4.46374 6.71786 4.46374 5.61314C4.46374 4.50344 5.34453 3.62265 6.45423 3.62265Z" fill="white"></path>
                                        </svg>
                                    </li>
                                    <li className='ml-2 w-[28px] h-[28px] border-[1px] rounded-full flex justify-center items-center'>
                                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.51739 0.310482C0.871589 0.310482 0.345215 0.832433 0.345215 1.47824C0.345215 2.11962 0.867166 2.65484 1.51297 2.65484C2.15435 2.65484 2.68073 2.11962 2.68073 1.47381C2.68073 0.82801 2.15435 0.301636 1.50855 0.301636L1.51739 0.310482ZM7.21905 3.4068C6.23707 3.4068 5.67531 3.91991 5.40549 4.42859H5.37452V3.5395H3.43711V10.0329H5.44972V6.81276C5.44972 5.96348 5.51165 5.14517 6.55997 5.14517C7.5906 5.14074 7.6083 6.10945 7.6083 6.86141V10.0241H9.6209V6.45447C9.6209 4.70726 9.24492 3.38469 7.20135 3.38469L7.21905 3.4068ZM0.504454 3.54393V10.0374H2.52149V3.5395H0.500031L0.504454 3.54393Z" fill="white"></path>
                                        </svg>
                                    </li>
                                    <li className='ml-2 w-[28px] h-[28px] border-[1px] rounded-full flex justify-center items-center'>
                                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.08227 0.641886C5.20624 0.641886 3.54915 0.835958 2.54147 0.980269C1.70546 1.0997 1.02869 1.73168 0.874429 2.56271C0.740071 3.26933 0.605713 4.30937 0.605713 5.60816C0.605713 6.90696 0.735095 7.94201 0.869453 8.6561C1.01874 9.48713 1.69551 10.1191 2.53151 10.2385C3.54169 10.3829 5.20375 10.5769 7.07232 10.5769C8.93343 10.5769 10.5955 10.3779 11.6131 10.2336C12.4442 10.1092 13.1209 9.47718 13.2752 8.64615C13.4046 7.93455 13.5389 6.89452 13.5389 5.59821C13.5389 4.29941 13.4046 3.25938 13.2702 2.54778C13.116 1.71177 12.4392 1.07979 11.6032 0.960364C10.588 0.811077 8.93592 0.617004 7.06237 0.617004L7.08227 0.641886ZM7.08227 1.63713C8.88865 1.63713 10.5009 1.82125 11.4813 1.96059C11.8993 2.0203 12.2277 2.33878 12.3023 2.75181C12.4218 3.40867 12.5511 4.37903 12.5511 5.61314C12.5511 6.83729 12.4218 7.81263 12.3023 8.47447C12.2227 8.8875 11.8993 9.20598 11.4763 9.26569C10.491 9.40502 8.86874 9.58914 7.07232 9.58914C5.2759 9.58914 3.65117 9.40005 2.66836 9.26071C2.24538 9.19602 1.91695 8.87754 1.84231 8.46452C1.7179 7.80268 1.59349 6.83231 1.59349 5.60319C1.59349 4.3641 1.7179 3.39872 1.84231 2.74185C1.91695 2.32385 2.2404 2.01035 2.66338 1.94566C3.63872 1.80135 5.256 1.61723 7.06237 1.61723L7.08227 1.63713ZM5.58941 2.77171V8.45954L6.33584 8.03656L9.8192 6.04607L10.5656 5.61065L9.8192 5.17523L6.33584 3.18474L5.58941 2.77171ZM6.58465 4.47856L8.55524 5.61314L6.57968 6.74772L6.58465 4.47856Z" fill="white"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="basis-[15%]">
                        <div>
                            <div>
                                <Image src={Logo} alt="logo" />
                            </div>
                            <div className='flex justify-between mt-8'>

                                <div className='w-8 h-8'>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff" />
                                        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff" />
                                    </svg>
                                </div>

                                <div className='w-8 h-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='w-8 h-8'>

                                    <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path fill='#fff' d="M829.44 554.666667c-9.386667 0-19.2-2.986667-28.586667-5.12a402.773333 402.773333 0 0 1-55.893333-16.64 85.333333 85.333333 0 0 0-105.813333 42.666666l-9.386667 19.2a519.68 519.68 0 0 1-113.493333-85.333333 519.68 519.68 0 0 1-85.333334-113.493333l17.92-11.946667a85.333333 85.333333 0 0 0 42.666667-105.813333 440.746667 440.746667 0 0 1-16.64-55.893334c-2.133333-9.386667-3.84-19.2-5.12-29.013333a128 128 0 0 0-128-106.24h-128a128 128 0 0 0-128 145.493333 810.666667 810.666667 0 0 0 704.853333 702.293334h16.213334a128 128 0 0 0 85.333333-32.426667 128 128 0 0 0 42.666667-96v-128a128 128 0 0 0-105.386667-123.733333z m21.333333 256a42.666667 42.666667 0 0 1-14.506666 32 44.8 44.8 0 0 1-34.986667 10.666666A725.333333 725.333333 0 0 1 173.653333 222.72a46.506667 46.506667 0 0 1 10.666667-34.986667 42.666667 42.666667 0 0 1 32-14.506666h128a42.666667 42.666667 0 0 1 42.666667 33.706666q2.56 17.493333 6.4 34.56a474.453333 474.453333 0 0 0 19.626666 66.133334l-59.733333 27.733333a42.666667 42.666667 0 0 0-20.906667 56.746667 618.24 618.24 0 0 0 298.666667 298.666666 42.666667 42.666667 0 0 0 32.426667 0 42.666667 42.666667 0 0 0 24.32-22.186666l26.453333-59.733334a584.106667 584.106667 0 0 0 67.413333 19.626667q17.066667 3.84 34.56 6.4a42.666667 42.666667 0 0 1 33.706667 42.666667z" /></svg>
                                </div>

                                <div className='w-8 h-8'>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#fff" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="text-sm text-center flex flex-col w-full mt-16">
                        <div className='border-t-2 border-b-2 py-5'>
                            <p>“ما همراه با شرکای خود، بر ایجاد محصولاتی با انرژی کارآمد و مسئولانه تولید می‌شویم که برای خانه‌ها، ساختمان‌ها و افرادی که به آنها خدمات می‌دهند تفاوت ایجاد می‌کند.”</p>
                        </div>
                        <div className='py-5'>
                            <p>طراحی و پشتیبانی توسط سایت تیم BidaTec</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;