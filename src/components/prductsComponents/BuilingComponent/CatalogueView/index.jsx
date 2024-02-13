import { useState } from "react";
import noneProfileImage from "../../../../../public/image/catalogue3d/none-profile.jpg"
import Pagination from "../../../pagination/index"

import CatalogueCardComponent from "../CatalogueCardComponent";

const CatalogueView = () => {
    const [receivedDataView, setReceivedDataView] = useState()

    const catalogueDataView = [
        {
            title: <div>سیستم <span>Series7000</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>SkyLight</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>AddOn</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>Nim Lamel</span></div>,
            image: noneProfileImage,
            link: '#'
        },
    ];

    const handleDataFromChildView = (data) => {
        setReceivedDataView(data)
    };

    return (
        <>
            <div>
                <div className="pt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های نما
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    <CatalogueCardComponent receivedData={receivedDataView} />
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataView} sendDataToParent={handleDataFromChildView} />
            </div>
        </>
    );
}

export default CatalogueView;
