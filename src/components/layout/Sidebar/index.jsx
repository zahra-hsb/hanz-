import SidebarComponents from "./utils-sidebar/SidebarComponents";

const Sidebar = () => {



    return (
        <>
            <aside class="flex flex-col justify-between fixed top-0 right-0 z-40 w-64 h-screen transform translate-x-full lg:transform-none transition-transform border" aria-label="Sidebar">

                <SidebarComponents />

            </aside>

        </>
    )
}

export default Sidebar;