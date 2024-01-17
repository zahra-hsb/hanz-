import Link from "next/link"
import { useState } from "react";

const Menu = ({ selectedTab, handleTabClick, setSidebarShow, toggleOverflow }) => {
    const [showChildMenu, setShowChildMenu] = useState(false);

    const menuItem = [
        { tab: 'home', label: 'خانه' },
        { tab: 'products', label: 'معرفی محصول' },
        { tab: 'imageGallery', label: 'گالری تصاویر' },
        { tab: 'about', label: 'درباره ما' },
        { tab: 'contactUs', label: 'تماس با ما' }
    ]

    return (
        <ul className="space-y-2 font-medium">
            {menuItem.map(item => (
                <li
                    key={item.tab}
                    onClick={() => setSidebarShow(false)}
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href={item.tab === 'home' ? '/' : item.tab}
                            className={`${selectedTab === item.tab ? 'text-green' : 'text-gray-500'} flex items-center w-full p-2 rounded-lg hover:bg-gray-100 group hover:text-green`}
                            onClick={() => {
                                handleTabClick(item.tab)
                                // toggleOverflow()
                            }}
                        >
                            <span className="nav-link ms-3">{item.label}</span>
                        </Link>
                        {item.tab === 'products' && (
                            <ArowDown setShowChildMenu={setShowChildMenu} />
                        )}
                    </div>
                    {item.tab === 'products' && (
                        <ul
                            id="dropdown-example"
                            className={`${!showChildMenu ? 'hidden' : ''} py-2 space-y-2`}
                        >
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}
                                // onClick={() => handleTabClick(item.tab)}
                                >ساختمانی</Link>
                            </li>
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}>فنی</Link>
                            </li>
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}>خدمات</Link>
                            </li>
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}>اکسسوری</Link>
                            </li>
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}


export default Menu;

export const ArowDown = ({ setShowChildMenu }) => {
    return (
        <div
            className="px-2 py-3 rounded-lg hover:bg-gray-100 group hover:text-green cursor-pointer"
            onClick={() => setShowChildMenu(s => !s)}
        >
            <svg
                className="w-3 h-3 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
        </div>
    );
}