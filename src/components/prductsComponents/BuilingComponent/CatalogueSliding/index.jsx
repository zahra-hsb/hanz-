import { useState } from "react";
import profile1Image from "../../../../../public/image/catalogue3d/profile-1.jpg"
import ShaycoGhorfe from "../../../../../public/image/catalogue3d/Shayco-Ghorfe.png"
import SL115TMono from "../../../../../public/image/catalogue3d/SL-115-T-Mono.png"
import profile2Image from "../../../../../public/image/catalogue3d/profile-2.jpg"
import profile3Image from "../../../../../public/image/catalogue3d/profile-3.jpg"
import Link from "next/link";
import Pagination from "../../../pagination/index"
import Image from "next/image";
import CatalogueCardComponent from "../catalogueComponent/CatalogueCardComponent";

const CatalogueSliding = () => {
    const [receivedDataSliding, setReceivedDataSliding] = useState()

    const catalogueDataSliding = [
        {
            title: <div>سیستم <span>SL 140 SLIM</span></div>,
            image: profile1Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 140 2CM</span></div>,
            image: ShaycoGhorfe,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 140 4CM</span></div>,
            image: profile3Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 T</span></div>,
            image: profile1Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 T Mono</span></div>,
            image: profile2Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 N Mono</span></div>,
            image: profile3Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 115 T Mono</span></div>,
            image: SL115TMono,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 115 T Double Rial</span></div>,
            image: profile3Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 60 N</span></div>,
            image: profile1Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
    ];

    const handleDataFromChildSliding = (data) => {
        setReceivedDataSliding(data)
    };

    return (
        <>
            <div>
                <div className="pt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های کشویی
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    {/* {receivedDataSliding && receivedDataSliding.map((data, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-inner mb-10">
                            <div>
                                <Image className="rounded-t-lg" src={data.image} alt="" />
                            </div>
                            <div className="p-5 flex justify-between items-center">
                                <h5 className="text-xl tracking-tight text-gray-800 opacity-[76%] basis-[58%]">{data.title}</h5>
                                <Link href={data.link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:opacity-[80%] outline-none">
                                    نمایش کاتالوگ
                                    <svg className="rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))} */}
                    <CatalogueCardComponent receivedData={receivedDataSliding} />
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataSliding} sendDataToParent={handleDataFromChildSliding} />
            </div>
        </>
    );
}

export default CatalogueSliding;
