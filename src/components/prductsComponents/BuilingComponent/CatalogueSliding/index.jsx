import { useState } from "react";
import noneProfileImage from "../../../../../public/image/catalogue3d/none-profile.jpg"
import profile1Image from "../../../../../public/image/catalogue3d/profile-1.jpg"
import SL115TDoubleRial from "../../../../../public/image/catalogue3d/115.jpg"
import ShaycoGhorfe from "../../../../../public/image/catalogue3d/Shayco-Ghorfe.png"
import SL115TMono from "../../../../../public/image/catalogue3d/SL-115-T-Mono.png"
import profile2Image from "../../../../../public/image/catalogue3d/profile-2.jpg"
import profile3Image from "../../../../../public/image/catalogue3d/profile-3.jpg"
import SL140_4Image from "../../../../../public/image/catalogue3d/SL140-4.jpg"
import Pagination from "../../../pagination"

import CatalogueCardComponent from "../CatalogueCardComponent";

const CatalogueSliding = () => {
    const [receivedDataSliding, setReceivedDataSliding] = useState()

    const catalogueDataSliding = [
        {
            title: <div>سیستم <span>SL 140 SLIM</span></div>,
            image: profile1Image,
            link: 'https://drive.google.com/file/d/135QmvPuij1SVuXAy0caLbiF2pFY-_M8O/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 140 2CM</span></div>,
            image: ShaycoGhorfe,
            link: 'https://drive.google.com/file/d/1IfsjIGxjpMZBkx_KfmrJbMlu2WWxFTVC/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 140 4CM</span></div>,
            image: SL140_4Image,
            link: 'https://drive.google.com/file/d/1RFnFfzeHH-TKMs4emLdflmKEC7wY4LJ8/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 T</span></div>,
            image: profile3Image,
            link: 'https://drive.google.com/file/d/1XfL_JVOlZXzGQkNsKMkZU7RfIrgtLBot/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 T Mono</span></div>,
            image: profile2Image,
            link: 'https://drive.google.com/file/d/1BRjAD6pv4I74lQQhzpsmUvUea7dNO6ux/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 95 N Mono</span></div>,
            image: noneProfileImage,
            link: '#'
        },
        {
            title: <div>سیستم <span>SL 115 T Mono</span></div>,
            image: SL115TMono,
            link: 'https://drive.google.com/file/d/1H4qJpeChRRAHzcP9BST0fAaAaEpM4ozo/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 115 T Double Rial</span></div>,
            image: SL115TDoubleRial,
            link: 'https://drive.google.com/file/d/1UeoxkU2isKpNFLhe7q1sYGhiG-bMXOhx/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 60 N</span></div>,
            image: noneProfileImage,
            link: 'https://drive.google.com/file/d/1wU2MQCbobJFYW7E__xKpL0q_cVHRodRV/view?usp=sharing'
        },
        {
            title: <div>سیستم <br /><span>SL 140 Z Shoulder</span></div>,
            image: noneProfileImage,
            link: 'https://drive.google.com/file/d/1CoxTpd4hN6UIt9zWvl1s-cEEe44LNnDz/view?usp=sharing'
        },
        {
            title: <div>سیستم <span>SL 150 Mono</span></div>,
            image: noneProfileImage,
            link: '#'
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
