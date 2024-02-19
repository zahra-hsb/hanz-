import { useState } from "react";
import ProfileShutterImage from "../../../../../public/image/catalogue3d/shutter.png"
import Pagination from "../../../pagination/index"
import CatalogueCardComponent from "../CatalogueCardComponent";

const CatalogueShutter = () => {
    const [receivedDataShutter, setReceivedDataShutter] = useState()

    const catalogueDataShutter = [
        {
            title: <div>سیستم <span>Shutter</span></div>,
            image: ProfileShutterImage,
            link: '#'
        },
    ];

    const handleDataFromChildShutter = (data) => {
        setReceivedDataShutter(data)
    };

    return (
        <>
            <div>
                <div className="pt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های شاتر 
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    <CatalogueCardComponent receivedData={receivedDataShutter} />
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataShutter} sendDataToParent={handleDataFromChildShutter} />
            </div>
        </>
    );
}

export default CatalogueShutter;
