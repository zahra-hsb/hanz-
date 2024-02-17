import Image from "next/image"
import iranFlag from '../../../../../public/icons/Flag_of_Iran.svg.webp'

const Language = () => {
    return (
        <>
            <div className="w-full bg-white flex justify-between px-8 py-5">
                <p className="">فارسی</p>
                <Image src={iranFlag} alt="farsi" />
            </div>
        </>
    )
}

export default Language