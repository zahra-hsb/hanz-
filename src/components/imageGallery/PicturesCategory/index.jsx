import Image from "next/image"
import image1 from "../../../../public/image/Shayco-Ghorfe-WEBSITE.jpg"
import image2 from "../../../../public/image/Dominion-Tower-14.jpg"
import Button from "@/components/globalComponents/Main/button"

const PicturesGallery = () => {
    return (
        <>
            <section className="p-10">
                <div className="flex items-center justify-center flex-wrap gap-16 p-5">
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={'#'} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute mt-[80px]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} />
                        <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
                    </div>
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={'#'} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute mt-[80px]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} />
                        <h3 className="hover:text-green">تصاویر پروژه ها</h3>
                    </div>
                    <div className="group flex flex-col items-center justify-between gap-5 relative cursor-pointer overflow-hidden lg:w-[28%]">
                        <Image src={image1} alt={'hanz'} className="transition duration-300 ease-in-out overflow-hidden hover:scale-105 hover:brightness-50" />
                        <Button title={'نمایش بیشتر'} url={'#'} border={'opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 border-2 border-white absolute mt-[80px]'} color={'text-white'} hover={'hover:text-black hover:bg-white'} />
                        <h3 className="hover:text-green">تصاویر نمایشگاه</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PicturesGallery