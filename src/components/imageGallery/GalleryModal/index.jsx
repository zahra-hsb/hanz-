import Image from "next/image"
import mainPic from "../../../../public/image/Modiriyat-WEBSITE.jpg"
import primePic1 from "../../../../public/image/Sales-Manager-WEBSITE.jpg"
import primePic2 from "../../../../public/image/sales-manager-WEBSITE-1.jpg"
import arrowRight from "../../../../public/icons/arrow-1.svg"
import arrowLeft from "../../../../public/icons/arrow.svg"


const GalleryModal = ({ closeModal }) => {
    return (
        <>
            <div className="transition duration-100 fixed top-0 left-0 z-40 w-full h-full bg-black cursor-pointer" onClick={closeModal}></div>
            <section className="transition duration-100 fixed top-[50%] left-[50%] p-16 ml-[-500px] mt-[-300px] z-50 w-[1000px] h-[600px] bg-gradient-to-r from-[#010101] to-[#252525]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={mainPic} alt="" width={400} className="inner drop-shadow-sm" />
                    </div>
                </div>
                <div className="flex items-center justify-between py-16">
                    <Image src={arrowRight} alt="arrow-right" className="cursor-pointer hover:invert" />
                    <div>
                        <Image src={primePic1} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                    </div>
                    <div>
                        <Image src={mainPic} alt="" width={200} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                    </div>
                    <div>
                        <Image src={primePic2} alt="" width={160} className="transition duration-300 ease-in-out hover:scale-105 hover:brightness-50 cursor-pointer" />
                    </div>
                    <Image src={arrowLeft} alt="arrow-right" className="cursor-pointer hover:invert" />
                </div>
            </section>
        </>
    )
}

export default GalleryModal