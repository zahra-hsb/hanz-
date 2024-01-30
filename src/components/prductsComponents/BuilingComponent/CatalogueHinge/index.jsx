import { useState } from "react";
import profile1Image from "../../../../../public/image/profile-1.jpg"
import profile2Image from "../../../../../public/image/profile-2.jpg"
import profile3Image from "../../../../../public/image/profile-3.jpg"
import Link from "next/link";
import Pagination from "../../../pagination/index"
import Image from "next/image";

const CatalogueHinge = () => {
    const [receivedDataHinge, setReceivedDataHinge] = useState()

    const catalogueDataHinge = [
        {
            title: <div>سیستم <span>115T</span></div>,
            image: profile1Image,
        },
        {
            title: <div>سیستم <span>60N</span></div>,
            image: profile2Image,
        },
        {
            title: <div>سیستم <span>68LUX</span></div>,
            image: profile3Image,
        },
        {
            title: <div>سیستم <span>68Decorative</span></div>,
            image: profile1Image,
        },
        {
            title: <div>سیستم <span>68ECO</span></div>,
            image: profile2Image,
        },
        {
            title: <div>سیستم <span>64LUX</span></div>,
            image: profile3Image,
        },
        {
            title: <div>سیستم <span>64ECO</span></div>,
            image: profile1Image,
        },
    ];

    const handleDataFromChildSliding = (data) => {
        setReceivedDataHinge(data)
    };

    return (
        <>
            <div>
                <div className="pt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های لولایی
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    {receivedDataHinge && receivedDataHinge.map((service, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-inner mb-10">
                            <a href="#">
                                <Image className="rounded-t-lg" src={service.image} alt="" />
                            </a>
                            <div className="p-5 flex justify-between items-center">
                                <h5 className="text-xl tracking-tight text-gray-800 opacity-[76%] basis-[58%]">{service.title}</h5>
                                <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:opacity-[80%] outline-none">
                                    دانلود کاتالوگ
                                    <svg className="rotate-90 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataHinge} sendDataToParent={handleDataFromChildSliding} />
            </div>
        </>
    );
}

export default CatalogueHinge;
