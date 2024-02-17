import { SlUserFollow } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";


const FollowUsSection = () => {
    return (
        <>
            <main className="flex justify-end gap-2 items-end px-8 text-gray-700 ">
                <IoIosArrowDown className="cursor-pointer hover:text-gray-400" size={15}/>
                <SlUserFollow className="cursor-pointer hover:text-gray-400" size={20} />
            </main>
        </>
    )
}

export default FollowUsSection