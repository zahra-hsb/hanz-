import Image from "next/image"
import GalleryModal from "@/components/imageGallery/GalleryModal";
import image1 from "../../../../public/image/projects/1-Edited-768x511.jpg"
import image2 from "../../../../public/image/projects/2-edited-768x511.jpg"
import image3 from "../../../../public/image/projects/3-edited-768x512.jpg"
import image4 from "../../../../public/image/projects/4-edited2-768x511.jpg"
import image5 from "../../../../public/image/projects/5-edited2-768x511.jpg"
import image6 from "../../../../public/image/projects/7-edited-768x511.jpg"
import image7 from "../../../../public/image/projects/8-edited-768x511.jpg"
import image8 from "../../../../public/image/projects/9-edited-768x511.jpg"

import mainPic from "../../../../public/image/projects/9-edited-768x511.jpg"
import primePic1 from "../../../../public/image/Sales-Manager-WEBSITE.jpg"
import primePic2 from "../../../../public/image/sales-manager-WEBSITE-1.jpg"

import { useState } from "react"


const PicturesGallery = () => {
    const galleryArray = [
        { id: 1, src: image1, category: 'تصاویر نمایشگاه', gallery: [mainPic, primePic1, primePic2, mainPic, primePic2] },
        { id: 2, src: image2, category: 'تصاویر پروژه ها', gallery: [image1, image2, image3, image4, image5, image6, image7, image8] },
    ]
    console.log('galleryArray: ' + galleryArray.gallery)
    const [isShow, setShow] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        setShow(true);
      };
    
    console.log('show: ', isShow)
    function showModal() {
        setShow(true)
    }
    function closeModal() {
        setShow(false)
    }

    return (
        <>

            <section className="p-10">
                <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-16 p-5">
                    {galleryArray.map((img, index) => (
                        <>
                            <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]" onClick={() => handleCategoryClick(img.category)}>
                                <div className="w-full lg:h-[160px] 2xl:h-[250px] overflow-hidden">
                                    <Image src={img.src} key={index} alt={'hanz'} className="transition w-full duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                                </div>
                                <button className='z-40 text-green text-sm lg:text-md px-4 py-1 rounded-3xl transition-colors opacity-0 duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute sm:my-[30%] my-auto mx-auto text-white hover:text-black hover:bg-white' onClick={() => showModal()} >نمایش بیشتر  ←</button>
                                <h3 className="hover:text-green" >{img.category}</h3>
                            </div>
                            {/* {isShow ? <GalleryModal closeModal={closeModal} opacity={'opacity-100 z-50'} wraperOpacity={'opacity-80 z-40'} galleryProp={img.gallery} /> : <GalleryModal closeModal={closeModal} opacity={'opacity-0 z-[-10]'} wraperOpacity={'opacity-0 z-[-10]'} galleryProp={img.gallery} />} */}
                            {isShow && (
                                <GalleryModal mainPic={img.src} closeModal={closeModal} opacity={'opacity-100 z-50'} wraperOpacity={'opacity-80 z-40'} galleryProp={galleryArray.find((item) => item.category === currentCategory).gallery}/>
                            )}
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PicturesGallery