import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo'
import Search from './Search';
import Menu from './Menu';
import Social from './Social';
import Login from './Login';
import { toggleOverflow } from '@/components/utils';

const SidebarComponents = ({ setSidebarShow }) => {

    const [selectedTab, setSelectedTab] = useState(null);

    const router = useRouter();

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    useEffect(() => {
        if (router.pathname === '/') {
            setSelectedTab('home');
        } else if (router.pathname === '/products') {
            setSelectedTab('products');
        } else if (router.pathname === '/galleryImage') {
            setSelectedTab('galleryImage');
        } else if (router.pathname === '/about') {
            setSelectedTab('about');
        } else if (router.pathname === '/callUs') {
            setSelectedTab('callUs');
        }
    }, [router.pathname]);

    return (
        <div className='flex flex-col justify-between fixed top-0 right-0 z-50 w-full lg:w-64 h-screen bg-white'>
            <div>
                <div className='flex justify-between items-end'>
                    <Logo />

                    <div className='text-4xl ml-6 pb-1 lg:hidden text-gray-400 rotate-45 cursor-pointer' onClick={() => {
                        setSidebarShow((s) => !s)
                        toggleOverflow()
                    }}>+</div>
                </div>
                <div className="flex px-5 mt-6 w-full">
                    <Search />
                </div>

                <div class="px-3 pb-4 mt-4 overflow-y-auto">
                    <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleTabClick={handleTabClick} />
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