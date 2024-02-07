import { useState } from "react";
import noneProfileImage from "../../../../../public/image/catalogue3d/none-profile.jpg"
import profile115TImage from "../../../../../public/image/catalogue3d/115-t.jpg"
import profile60NImage from "../../../../../public/image/catalogue3d/60n.jpg"
import profile77DImage from "../../../../../public/image/catalogue3d/77d.jpg"
import Pagination from "../../../pagination/index"
import CatalogueCardComponent from "../catalogueComponent/CatalogueCardComponent";

const CatalogueHinge = () => {
    const [receivedDataHinge, setReceivedDataHinge] = useState()

    const catalogueDataHinge = [
        {
            title: <div>سیستم <span>115T</span></div>,
            image: profile115TImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>60N</span></div>,
            image: profile60NImage,
            link: 'https://drive.google.com/file/d/1NtpN7vk3antweBVJLGgTVYdLPjskS_UF/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>68LUX</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>68Decorative</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>68ECO</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>64LUX</span></div>,
            image: noneProfileImage,
            link: 'https://drive.google.com/file/d/1PkEFxaiBEPK48ZV-IckXGdJUg-2LJP1y/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>64ECO</span></div>,
            image: noneProfileImage,
            link: 'https://drive.google.com/file/d/1NlqYqb7AO1H_TqB2Np74YfvWcenjaIva/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>77Decoral</span></div>,
            image: profile77DImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>70 Hidden</span></div>,
            image: noneProfileImage,
            link: '#'
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
                    {/* {receivedDataHinge && receivedDataHinge.map((data, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-inner mb-10">
                            <div>
                                <Image className="rounded-t-lg" src={data.image} alt="" />
                            </div>
                            <div className="p-5 flex justify-between items-center">
                                <h5 className="text-xl tracking-tight text-gray-800 opacity-[76%] basis-[58%]">{data.title}</h5>
                                <Link href={data.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:opacity-[80%] outline-none">
                                    نمایش کاتالوگ
                                    <svg className="rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))} */}
                    <CatalogueCardComponent receivedData={receivedDataHinge} />
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataHinge} sendDataToParent={handleDataFromChildSliding} />
            </div>
        </>
    );
}

export default CatalogueHinge;
