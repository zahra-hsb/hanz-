import Image from "next/image"
import iranFlag from '../../../../../public/icons/Flag_of_Iran.svg.webp'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import LangSection from "./LangSection";
import arabic from '../../../../../public/icons/32px-Arabic-Language-Flag.svg.png'
import english from '../../../../../public/icons/Flag_of_the_United_Kingdom_(3-5).svg.webp'



const Language = () => {
    const languages = [
        { title: 'فارسی', src: iranFlag },
        { title: 'العربی', src: arabic },
        { title: 'English', src: english }
    ]
    const [isOpen, setOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState(languages[0])

    function changeLang(e) {
        const foundCurrentLang = languages.find(item =>
            item.title === e.target.innerText 
        )
        setCurrentLang(foundCurrentLang)

    }

    function showLang() {
        setOpen(!isOpen)
    }
    return (
        <>
            <div className="relative w-full bg-white flex justify-between items-center px-5 py-5 border-t">
                <div className="flex gap-3">
                    <Image onClick={showLang} width={35} height={20} src={currentLang.src.src} alt="farsi" className="cursor-pointer" />
                    <p onClick={showLang} className="hover:text-gray-500 cursor-pointer">{currentLang.title}</p>
                </div>
                <IoIosArrowDown onClick={showLang} className={` ${isOpen ? 'rotate-180' : 'rotate-0'} cursor-pointer hover:text-gray-500 duration-300`} />
                {isOpen && <LangSection languages={languages} changeLang={changeLang} />}

            </div>
        </>
    )
}

export default Language