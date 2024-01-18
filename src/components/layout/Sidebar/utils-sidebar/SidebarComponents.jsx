import { useEffect, useState } from 'react';
import Logo from './Logo'
import Search from './Search';
import Menu from './Menu';
import Social from './Social';
import Login from './Login';
import { toggleOverflow } from '@/components/utils';

const SidebarComponents = ({ setSidebarShow, router }) => {
    const [selectedTab, setSelectedTab] = useState(null);

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    useEffect(() => {
        if (router.pathname === '/') {
            setSelectedTab('home');
        } else if (router.pathname === '/products') {
            setSelectedTab('products');
        } else if (router.pathname === '/imageGallery') {
            setSelectedTab('imageGallery');
        } else if (router.pathname === '/about') {
            setSelectedTab('about');
        } else if (router.pathname === '/contactUs') {
            setSelectedTab('contactUs');
        }
    }, [router.pathname]);

    return (
        <div className='flex flex-col justify-between fixed top-0 right-0 z-50 w-full lg:w-64 h-[100%] bg-white border-l'>
            <div className='flex flex-col justify-start'>
                <div className='flex justify-between items-end'>
                    <Logo />

                    <div className='text-4xl ml-6 pb-1 lg:hidden text-gray-400 rotate-45 cursor-pointer' onClick={() => {
                        setSidebarShow((s) => !s)
                        // toggleOverflow()
                    }}>+</div>
                </div>
                <div className="flex px-5 pt-6 w-full">
                    <Search />
                </div>

                <div className="px-3 py-4 overflow-y-auto">
                    <Menu selectedTab={selectedTab} handleTabClick={handleTabClick} setSidebarShow={setSidebarShow} toggleOverflow={toggleOverflow} />
                </div>
            </div>

            <div>
                <Social />
                <Login />
            </div>
        </div>
    )
}

export default SidebarComponents;