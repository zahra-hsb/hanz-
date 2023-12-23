import SidebarComponents from "./utils-sidebar/SidebarComponents";

const MenuHamber = ({ setSidebarShow }) => {

    return (
        <>
            <div
                onClick={() => setSidebarShow((s) => !s)}
                className="bg-black bg-opacity-25 fixed top-0 right-0 z-10 w-full h-screen">

            </div>
            <SidebarComponents />
        </>
    );
};

export default MenuHamber;
