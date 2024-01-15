import Image from "next/image"
import GalleryModal from "@/components/imageGallery/GalleryModal";
import image1 from "../../../../public/image/Shayco-Ghorfe-WEBSITE.jpg"
import image2 from "../../../../public/image/Dominion-Tower-14.jpg"
import Button from "@/components/globalComponents/Main/button"
import { useState } from "react"


const PicturesGallery = () => {
    const galleryArray = [
        {src: image1, category: 'تصاویر نمایشگاه'},
        {src: image2, category: 'تصاویر نمایشگاه'},
    ]
    console.log(galleryArray[1].src)
    const [isShow, setShow] = useState(false)
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
                            <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]" onClick={() => showModal()}>
                                <div className="w-full lg:h-[160px] 2xl:h-[250px] overflow-hidden">
                                    <Image src={img.src} key={index} alt={'hanz'} className="transition w-full duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                                </div>
                                <button className='z-50 text-green text-sm lg:text-md px-4 py-1 rounded-3xl transition-colors opacity-0 duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute sm:my-[30%] my-auto mx-auto text-white hover:text-black hover:bg-white' onClick={() => showModal()} >نمایش بیشتر  ←</button>
                                <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            {isShow ? <GalleryModal closeModal={closeModal} opacity={'opacity-100 z-50'} wraperOpacity={'opacity-90 z-40'} /> : <GalleryModal closeModal={closeModal} opacity={'opacity-0 z-[-10]'} wraperOpacity={'opacity-0 z-[-10]'} />}
        </>
    )
}

export default PicturesGallery