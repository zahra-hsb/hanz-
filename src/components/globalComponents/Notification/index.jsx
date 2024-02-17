import Image from "next/image"
import pic from "../../../../public/image/sectors.banner.building-2000x560.jpg"
import Link from "next/link"

const Notification = ({ handleClose }) => {
    
    return (
        <>
            <div onClick={handleClose} className="fixed w-screen h-screen bg-black opacity-50 top-0 left-0 z-[50] cursor-pointer"></div>
            <span
                className="w-[15px] fixed top-0 right-0 z-50 p-5 sm:p-10 lg:p-10 text-4xl text-white cursor-pointer hover:text-red"
                onClick={handleClose}>
                <span className="rotate-45 flex hover:text-red-500">+</span>
            </span>
            <main className="fixed flex w-1/2 h-1/2 left-[calc(50%-25%)] top-20 bg-white z-50">
                <Link href={'#'}>
                    <Image src={pic} alt="notif" className="h-full" />
                </Link>
            </main>
        </>
    )
}

export default Notification