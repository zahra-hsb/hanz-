import { useEffect, useState } from "react";
import { toggleOverflow } from "@/components/utils";
import Link from "next/link";

const Header = ({ setSidebarShow, router }) => {
    const [pageName, setPageName] = useState('');

    const menuItem = [
        { tab: 'window', label: 'پروفیل' },
        { tab: 'door', label: 'متعلقات' },
        { tab: 'creatineWall', label: 'کراتین وال' },
    ]

    const handleScroll = () => {
        window.scrollTo({
            top: 160,
            behavior: 'smooth'
        });
    }


    useEffect(() => {
        if (router.pathname === '/') {
            setPageName('خانه');
        } else if (router.pathname === '/products') {
            setPageName('معرفی محصول');
        } else if (router.pathname === '/imageGallery') {
            setPageName('گالری تصاویر');
        } else if (router.pathname === '/about') {
            setPageName('درباره ما');
        } else if (router.pathname === '/contactUs') {
            setPageName('تماس با ما');
        }
    }, [router.pathname]);

    return (
        <>
            <header className={`
            ${router.pathname === '/products' && 'h-[80px] sm:h-[50px]'} 
            h-[50px] fixed bg-white z-30 flex justify-start items-center w-full border-b`}>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex justify-start items-center">
                        <div
                            className="lg:hidden mr-4">
                            <button
                                onClick={() => {
                                    setSidebarShow((s) => !s)
                                    toggleOverflow()

                                }}

                                type="button" className="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mr-4">
                            <p>{pageName}</p>
                        </div>
                    </div>
                    <div className={`${router.pathname === '/products' && 'border-t sm:border-none'}`}>
                        {router.pathname === '/products' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItem.map(item => (
                                    <li
                                        key={item.tab}
                                        onClick={() => handleScroll()}
                                    >
                                        <div
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;