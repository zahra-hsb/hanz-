import { useEffect, useState } from "react";
import { toggleOverflow } from "@/components/utils";
import Link from "next/link";

const Header = ({ setSidebarShow, router }) => {
    const [pageName, setPageName] = useState('');

    const menuItemForProduct = [
        { tab: 'building', label: 'ساختمانی' },
        { tab: 'industrial', label: 'صنعتی' },
        { tab: 'services', label: 'خدمات' },
        { tab: 'accessory', label: 'اکسسوری' },
    ]

    const menuItemForBuilding = [
        { tab: 'view', label: 'نما' },
        { tab: 'window', label: 'پنجره' },
        { tab: 'shelter', label: 'جان پناه' },
    ]

    const menuItemForServices = [
        { tab: 'color', label: 'رنگ' },
        { tab: 'ThermalBreak', label: 'ترمال بریک' },
        { tab: 'Pressure', label: 'پرس' },
        { tab: 'accessory', label: 'اکسسوری' },
    ]

    const menuItemForaccessory = [
        { tab: 'profile', label: 'پروفیل' },
        { tab: 'profile-properties', label: 'متعلقات' },
        { tab: 'creatineWall', label: 'کراتین وال' },
    ]



    useEffect(() => {
        if (router.pathname === '/') {
            setPageName('خانه');
        } else if (router.pathname === '/products') {
            setPageName('معرفی محصول');
        } else if (router.pathname === '/products/building') {
            setPageName('ساختمانی');
        } else if (router.pathname === '/products/industrial') {
            setPageName('صنعتی');
        } else if (router.pathname === '/products/services') {
            setPageName('خدمات');
        } else if (router.pathname === '/products/accessory') {
            setPageName('اکسسوری');
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
            ${router.pathname === '/products' || router.pathname === '/products/building' || router.pathname === '/products/industrial' || router.pathname === '/products/services' || router.pathname === '/products/accessory' ? 'h-[80px] sm:h-[50px]' : 'h-[50px]'}
            h-[50px] fixed bg-white z-30 flex justify-start items-center w-full border-b`}>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex justify-start items-center">
                        <div
                            className="lg:hidden mr-4">
                            <button
                                onClick={() => {
                                    setSidebarShow((s) => !s)
                                    // toggleOverflow()

                                }}

                                type="button" className="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mr-4 text-gray-600">
                            <p>{pageName}</p>
                        </div>
                    </div>
                    <div className={`${router.pathname === '/products' && 'border-t sm:border-none'} overflow-auto`}>
                        {router.pathname === '/products' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItemForProduct.map(item => (
                                    <li
                                        key={item.tab}
                                    // onClick={() => handleScroll()}
                                    >
                                        <Link
                                            href={item.tab === 'building' ? '/products/building' : (item.tab === 'industrial' ? '/products/industrial' : (item.tab === 'services' ? '/products/services' : '/products/accessory'))}
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={`${router.pathname === '/products/building' && 'border-t sm:border-none'}`}>
                        {router.pathname === '/products/building' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItemForBuilding.map(item => (
                                    <li
                                        key={item.tab}
                                    // onClick={() => handleScroll()}
                                    >
                                        <Link
                                            href={item.tab === 'view' ? '#view' : (item.tab === 'window' ? '#window' : '#shelter')}
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={`${router.pathname === '/products/industrial' && 'border-t sm:border-none'}`}>
                        {router.pathname === '/products/industrial' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItemForBuilding.map(item => (
                                    <li
                                        key={item.tab}
                                    // onClick={() => handleScroll()}
                                    >
                                        <Link
                                            href={item.tab === 'view' ? '#view' : (item.tab === 'window' ? '#window' : '#shelter')}
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={`${router.pathname === '/products/services' && 'border-t sm:border-none'}`}>
                        {router.pathname === '/products/services' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItemForServices.map(item => (
                                    <li
                                        key={item.tab}
                                    // onClick={() => handleScroll()}
                                    >
                                        <Link
                                            href={item.tab === 'color' ? '#color' : (item.tab === 'ThermalBreak' ? '#ThermalBreak' : (item.tab === 'Pressure' ? '#Pressure' : 'accessory' ) )}
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={`${router.pathname === '/products/accessory' && 'border-t sm:border-none'}`}>
                        {router.pathname === '/products/accessory' && (
                            <ul className="mr-2 space-x-2 font-medium flex items-center">
                                {menuItemForaccessory.map(item => (
                                    <li
                                        key={item.tab}
                                    // onClick={() => handleScroll()}
                                    >
                                        <Link
                                            href={item.tab === 'profile' ? '#profile' : (item.tab === 'profile-properties' ? '#profile-properties' : '#cratinwall')}
                                            className={"text-gray-500 flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green text-sm"}
                                        >
                                            <span className="nav-link ms-3 pl-2">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;




