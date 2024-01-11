import Image from "next/image"
import GalleryModal from "@/components/imageGallery/GalleryModal";
import image1 from "../../../../public/image/Shayco-Ghorfe-WEBSITE.jpg"
import image2 from "../../../../public/image/Dominion-Tower-14.jpg"
import Button from "@/components/globalComponents/Main/button"
import { useState } from "react"

const PicturesGallery = () => {
    const [isShow, setShow] = useState(true)
    function showModal () {
        console.log('show: ',isShow)
        setShow(true)
    }
    function closeModal () {
        setShow(false)
    }
    return (
        <>
            <section className="p-10">
                <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-16 p-5">
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={''} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute sm:mt-[30%] mt-[28%]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} onClick={showModal} />
                        <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
                    </div>
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={''} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute sm:mt-[30%] mt-[28%]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} onClick={showModal} />
                        <h3 className="hover:text-green">تصاویر پروژه ها</h3>
                    </div>
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={''} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute sm:mt-[30%] mt-[28%]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} onClick={showModal} />
                        <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
                    </div>
                </div>
            </section>
            {isShow && <GalleryModal closeModal={closeModal} />}
        </>
    )
}

export default PicturesGallery