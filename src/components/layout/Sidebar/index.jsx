import SidebarComponents from "./utils-sidebar/SidebarComponents";

const Sidebar = ({ router }) => {



    return (
        <>
            <aside class="flex flex-col justify-between fixed top-0 right-0 z-40 w-64 h-screen transform translate-x-full lg:transform-none transition-transform" aria-label="Sidebar">

                <SidebarComponents router={router} />

            </aside>

        </>
    )
}

export default Sidebar;