import Link from "next/link";
import TelInfo from "../TelInfo";

const InformationContact = () => {
    return (
        <>
            <div>
                <p className="text-gray-600">
                    سوالی دارید؟
                    <br />
                    ما برای کمک اینجا هستیم!
                    <br />
                    از طریق تلفن، ایمیل یا فرم زیر با ما در ارتباط باشید. شما همچنین می توانید به ما مراجعه کنید
                </p>
            </div>
            <div className="my-5 sm:leading-10">
                <div className="flex justify-start flex-col items-center sm:flex-row mb-8 sm:mb-0 sm:block">
                    <strong className="text-green">آدرس:</strong>
                    <p className="text-gray-600">تهران، شهریار، صباشهر، بعد از شهرداری، لاین کندرو، کوچه شقایق، انتهای کوچه شرکت هانز​</p>
                </div>
                <div>
                    <div className="flex justify-start flex-col gap-3 mb-8 sm:mb-0">
                        <div className="flex gap-2 justify-start items-center sm:items-start flex-col">
                            <TelInfo />
                        </div>
                        <div className="flex gap-1 justify-start flex-col">
                            <strong className="text-green"> کدپستی :</strong>
                            <p className="text-gray-600">3357632121</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-green flex flex-col items-center sm:flex-row sm:block'>
                <div>
                    <h2 className="font-extrabold">ما را دنبال کنید:</h2>
                </div>
                <div className="w-[50%] sm:w-[60%] lg:w-[60%]">
                    <ul className='pt-4 text-sm sm:text-lg flex justify-between'>
                        {/* facebook */}
                        <li className='group hover:border-none ml-2 w-[28px] h-[28px] border-[1px] border-gray-500 cursor-pointer hover:bg-green rounded-full flex justify-center items-center'>
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.59222 0.425501C3.84855 0.425501 2.82323 1.34555 2.82323 3.4422V5.28672H0.611572V7.49838H2.82323V12.8064H5.03489V7.49838H6.80421L7.24654 5.28672H5.03489V3.81376C5.03489 3.02199 5.29144 2.62831 6.03013 2.62831H7.24212V0.505121C7.0298 0.474158 6.41938 0.412231 5.58338 0.412231L5.59222 0.425501Z" className="group-hover:fill-white fill-[#4b5563]"></path>
                            </svg>
                        </li>
                        {/* instagram */}
                        <Link href={'https://www.instagram.com/shaycogroup?igsh=em05NmJ1eDRodWdm'} className='group hover:border-none ml-2 w-[28px] h-[28px] border-[1px] border-gray-500 cursor-pointer hover:bg-green rounded-full flex justify-center items-center'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.20497 0.144262C2.43343 0.144262 0.985352 1.59234 0.985352 3.35891V7.86737C0.985352 9.63393 2.43343 11.082 4.2 11.082H8.70846C10.475 11.082 11.9231 9.62895 11.9231 7.86239V3.34895C11.9231 1.57742 10.47 0.129333 8.70348 0.129333L4.20497 0.144262ZM4.20497 1.13951H8.71344C9.94256 1.13951 10.9328 2.12978 10.9328 3.35891V7.86737C10.9328 9.0965 9.93759 10.0868 8.70846 10.0868H4.19502C2.96091 10.0868 1.97064 9.09152 1.97064 7.86239V3.34895C1.97064 2.11485 2.96091 1.12458 4.19004 1.12458L4.20497 1.13951ZM9.39518 2.22433C9.14139 2.22433 8.94234 2.42337 8.94234 2.67219C8.94234 2.921 9.14139 3.12005 9.3902 3.12005C9.63901 3.12005 9.83806 2.91602 9.83806 2.66721C9.83806 2.41342 9.63404 2.21437 9.38523 2.21437L9.39518 2.22433ZM6.45423 2.6274C4.8071 2.6274 3.46849 3.96601 3.46849 5.61314C3.46849 7.25529 4.8071 8.59887 6.45423 8.59887C8.09638 8.59887 9.43996 7.25529 9.43996 5.61314C9.43996 3.96601 8.09638 2.6274 6.45423 2.6274ZM6.45423 3.62265C7.55895 3.62265 8.44472 4.50344 8.44472 5.61314C8.44472 6.71786 7.55895 7.60363 6.45423 7.60363C5.34453 7.60363 4.46374 6.71786 4.46374 5.61314C4.46374 4.50344 5.34453 3.62265 6.45423 3.62265Z" className="group-hover:fill-white fill-[#4b5563]"></path>
                            </svg>
                        </Link>
                        {/* linkedin */}
                        <li className='group hover:border-none ml-2 w-[28px] h-[28px] border-[1px] border-gray-500 cursor-pointer hover:bg-green rounded-full flex justify-center items-center'>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.51739 0.310482C0.871589 0.310482 0.345215 0.832433 0.345215 1.47824C0.345215 2.11962 0.867166 2.65484 1.51297 2.65484C2.15435 2.65484 2.68073 2.11962 2.68073 1.47381C2.68073 0.82801 2.15435 0.301636 1.50855 0.301636L1.51739 0.310482ZM7.21905 3.4068C6.23707 3.4068 5.67531 3.91991 5.40549 4.42859H5.37452V3.5395H3.43711V10.0329H5.44972V6.81276C5.44972 5.96348 5.51165 5.14517 6.55997 5.14517C7.5906 5.14074 7.6083 6.10945 7.6083 6.86141V10.0241H9.6209V6.45447C9.6209 4.70726 9.24492 3.38469 7.20135 3.38469L7.21905 3.4068ZM0.504454 3.54393V10.0374H2.52149V3.5395H0.500031L0.504454 3.54393Z" className="group-hover:fill-white fill-[#4b5563]"></path>
                            </svg>
                        </li>
                        {/* youtube */}
                        <li className='group ml-2 w-[28px] h-[28px] border-[1px] border-gray-500 rounded-full cursor-pointer hover:bg-green hover:border-none flex hover:fill-white justify-center items-center'>
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08227 0.641886C5.20624 0.641886 3.54915 0.835958 2.54147 0.980269C1.70546 1.0997 1.02869 1.73168 0.874429 2.56271C0.740071 3.26933 0.605713 4.30937 0.605713 5.60816C0.605713 6.90696 0.735095 7.94201 0.869453 8.6561C1.01874 9.48713 1.69551 10.1191 2.53151 10.2385C3.54169 10.3829 5.20375 10.5769 7.07232 10.5769C8.93343 10.5769 10.5955 10.3779 11.6131 10.2336C12.4442 10.1092 13.1209 9.47718 13.2752 8.64615C13.4046 7.93455 13.5389 6.89452 13.5389 5.59821C13.5389 4.29941 13.4046 3.25938 13.2702 2.54778C13.116 1.71177 12.4392 1.07979 11.6032 0.960364C10.588 0.811077 8.93592 0.617004 7.06237 0.617004L7.08227 0.641886ZM7.08227 1.63713C8.88865 1.63713 10.5009 1.82125 11.4813 1.96059C11.8993 2.0203 12.2277 2.33878 12.3023 2.75181C12.4218 3.40867 12.5511 4.37903 12.5511 5.61314C12.5511 6.83729 12.4218 7.81263 12.3023 8.47447C12.2227 8.8875 11.8993 9.20598 11.4763 9.26569C10.491 9.40502 8.86874 9.58914 7.07232 9.58914C5.2759 9.58914 3.65117 9.40005 2.66836 9.26071C2.24538 9.19602 1.91695 8.87754 1.84231 8.46452C1.7179 7.80268 1.59349 6.83231 1.59349 5.60319C1.59349 4.3641 1.7179 3.39872 1.84231 2.74185C1.91695 2.32385 2.2404 2.01035 2.66338 1.94566C3.63872 1.80135 5.256 1.61723 7.06237 1.61723L7.08227 1.63713ZM5.58941 2.77171V8.45954L6.33584 8.03656L9.8192 6.04607L10.5656 5.61065L9.8192 5.17523L6.33584 3.18474L5.58941 2.77171ZM6.58465 4.47856L8.55524 5.61314L6.57968 6.74772L6.58465 4.47856Z" className="group-hover:fill-white fill-[#4b5563]"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InformationContact;
