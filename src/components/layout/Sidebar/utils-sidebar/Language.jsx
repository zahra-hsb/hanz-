import Image from "next/image"
import iranFlag from '../../../../../public/icons/Flag_of_Iran.svg.webp'
import { IoIosArrowDown } from "react-icons/io";

const Language = () => {
    return (
        <>
            <div className="w-full bg-white flex justify-between items-center px-5 py-5 border-t">
                <div className="flex gap-3">
                    <Image src={iranFlag} alt="farsi" className="cursor-pointer"/>
                    <p className="hover:text-gray-500 cursor-pointer">فارسی</p>
                </div>
                <IoIosArrowDown className="cursor-pointer hover:text-gray-500 rotate-180" />
            </div>
        </>
    )
}

export default Language