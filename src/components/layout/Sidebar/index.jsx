import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './utils-sidebar/Logo'
import Search from './utils-sidebar/Search';
import Menu from './utils-sidebar/Menu';
import Social from './utils-sidebar/Social';
import Login from './utils-sidebar/Login';
const Sidebar = () => {

    // const router = useRouter();
    const [selectedTab, setSelectedTab] = useState(null);

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    // const [selectedTab, setSelectedTab] = useState('');

    // const handleTabClick = (tabName, path) => {
    //     setSelectedTab(tabName);
    //     router.push(path);
    // };


    // useEffect(() => {
    //     if (router.pathname === '/') {
    //         setSelectedTab('home');
    //     } else if (router.pathname === '/products') {
    //         setSelectedTab('products');
    //     } 
    // }, [router.pathname]);

    return (
        <>
            <aside class="flex flex-col justify-between fixed top-0 right-0 z-40 w-64 h-screen transform translate-x-full lg:transform-none transition-transform shadow" aria-label="Sidebar">

                <Logo />

                <div className="flex px-5 mt-[-70px]">
                    <Search />
                </div>

                <div class="px-3 pb-4 mt-[-70px] overflow-y-auto">
                    <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleTabClick={handleTabClick} />
                </div>

                <div>
                    <Social /> 
        
                    <Login />
                </div>
            </aside>

        </>
    )
}

export default Sidebar;