import SidebarComponents from "./utils-sidebar/SidebarComponents";
import { toggleOverflow } from "@/components/utils";

const MenuHamber = ({ setSidebarShow }) => {


    return (
        <>
            {/* <div
                onClick={() => {
                    setSidebarShow((s) => !s)
                    toggleOverflow()
                }}
                className="bg-black bg-opacity-25 fixed top-0 right-0 z-20 w-full h-screen lg:hidden">

            </div> */}
            <SidebarComponents setSidebarShow={setSidebarShow} />
        </>
    );
};

export default MenuHamber;
