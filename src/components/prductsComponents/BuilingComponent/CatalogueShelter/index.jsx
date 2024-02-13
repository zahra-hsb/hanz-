import { useState } from "react";
import noneProfileImage from "../../../../../public/image/catalogue3d/none-profile.jpg"
import Pagination from "../../../pagination/index"

import CatalogueCardComponent from "../CatalogueCardComponent";

const CatalogueShelter = () => {
    const [receivedDataShelter, setReceivedDataShelter] = useState()

    const catalogueDataShelter = [
        {
            title: <div>سیستم <span>Hand Rail</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>Partition</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>spigot</span></div>,
            image: noneProfileImage,
            link: '#'
        },
    ];

    const handleDataFromChildShelter = (data) => {
        setReceivedDataShelter(data)
    };

    return (
        <>
            <div>
                <div className="pt-20 mb-10 text-gray-600 flex justify-center items-center">
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                    <div className="mx-8 flex items-center">
                        <h4 className="text-xl opacity-[76%]">
                            کاتالوگ های جان پناه
                        </h4>
                        <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
                    </div>
                    <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
                </div>

                <div className="py-10 flex justify-around flex-wrap w-[90%] sm:w-full m-auto">
                    <CatalogueCardComponent receivedData={receivedDataShelter} />
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination data={catalogueDataShelter} sendDataToParent={handleDataFromChildShelter} />
            </div>
        </>
    );
}

export default CatalogueShelter;
