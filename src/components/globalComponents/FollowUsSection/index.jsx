import { SlUserFollow } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Social from "@/components/layout/Sidebar/utils-sidebar/Social";
import { useState } from "react";

const FollowUsSection = () => {
    const [isOpenModal, setOpenModal] = useState(false)

    function showModal() {
        setOpenModal(!isOpenModal)
    }
    return (
        <>
            <main className="flex justify-end gap-2 items-end px-8 text-gray-700 ">
                <IoIosArrowDown onClick={showModal} className="cursor-pointer hover:text-gray-400" size={15}/>
                <SlUserFollow onClick={showModal} className="cursor-pointer hover:text-gray-400" size={20} />
            </main>
            {isOpenModal && <Social />}
        </>
    )
}

export default FollowUsSection