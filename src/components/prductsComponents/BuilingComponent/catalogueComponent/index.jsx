import Image from "next/image";
import profile1Image from "../../../../../public/image/profile-1.jpg"
import ShaycoGhorfe from "../../../../../public/image/catalogue3d/Shayco-Ghorfe.png"
import SL115TMono from "../../../../../public/image/catalogue3d/SL-115-T-Mono.png"
import profile2Image from "../../../../../public/image/profile-2.jpg"
import profile3Image from "../../../../../public/image/profile-3.jpg"
import { useState } from "react";
import Link from "next/link";

const CatalogueComponent = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;


    const servicesData = [
        {
            title: <div>سیستم <span>SL 140 SLIM</span></div>,
            image: profile1Image,
        },
        {
            title: <div>سیستم <span>SL 140 2CM</span></div>,
            image: ShaycoGhorfe,
        },
        {
            title: <div>سیستم <span>SL 140 4CM</span></div>,
            image: profile3Image,
        },
        {
            title: <div>سیستم <span>SL 95 T</span></div>,
            image: profile1Image,
        },
        {
            title: <div>سیستم <span>SL 95 T Mono</span></div>,
            image: profile2Image,
        },
        {
            title: <div>سیستم <span>SL 95 N Mono</span></div>,
            image: profile3Image,
        },
        {
            title: <div>سیستم <span>115T</span></div>,
            image: profile1Image,
        },
        {
            title: <div>سیستم <span>SL 115 T Mono</span></div>,
            image: SL115TMono,
        },
        {
            title: <div>سیستم <span>SL 115 T Double Rial</span></div>,
            image: profile3Image,
        },
        {
            title: <div>سیستم <span>SL 60 N</span></div>,
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

    const totalPages = Math.ceil(servicesData.length / itemsPerPage);

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleServices = servicesData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div>
                <div className="mt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های شکرت
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    {visibleServices.map((service, index) => (
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
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-8 text-sm">
                        <li>
                            <p onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </p>
                        </li>
                        {pages.map((page) => (
                            <li key={page}>
                                <p onClick={() => handlePageChange(page)} className={`${currentPage === 1 ? 'disabled' : ''} cursor-pointer flex items-center justify-center px-3 h-8 leading-tight ${currentPage === page ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>{page}</p>
                            </li>
                        ))}
                        <li>
                            <p onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default CatalogueComponent;
