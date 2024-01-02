import Link from "next/link"
import { useState } from "react";

const Menu = ({ selectedTab, handleTabClick, setSidebarShow }) => {
    const [hiddenChildMenu, setHiddenChildMenu] = useState(true);

    const menuItem = [
        { tab: 'home', label: 'خانه' },
        { tab: 'products', label: 'معرفی محصول' },
        { tab: 'imageGallery', label: 'گالری تصاویر' },
        { tab: 'about', label: 'درباره ما' },
        { tab: 'contactUs', label: 'تماس با ما' }
    ]

    return (
        <ul class="space-y-2 font-medium">
            {menuItem.map(item => (
                <li
                    key={item.tab}
                    onClick={() => setSidebarShow(false)}
                >
                    <Link
                        href={item.tab === 'home' ? '/' : item.tab}
                        className={`${selectedTab === item.tab ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green`}
                        onClick={() => {
                            handleTabClick(item.tab)
                            toggleOverflow()
                        }}
                        onMouseOver={() => item.tab === 'products' ? setHiddenChildMenu(false) : ''}
                        onMouseLeave={() => item.tab === 'products' ? setHiddenChildMenu(true) : ''}
                    >
                        <span className="nav-link ms-3 pl-2">{item.label}</span>
                        {item.tab === 'products' && (
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        )}
                    </Link>
                    {item.tab === 'products' && (
                        <ul
                            id="dropdown-example"
                            className={`${hiddenChildMenu ? 'hidden' : ''} py-2 space-y-2`}
                            onMouseOver={() => setHiddenChildMenu(false)}
                            onMouseLeave={() => setHiddenChildMenu(true)}
                        >
                            <li>
                                <Link
                                    href="#"
                                    className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}
                                    onClick={() => handleTabClick(item.tab)}
                                >پنجره</Link>
                            </li>
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}>درب</Link>
                            </li>
                            <li>
                                <Link href="#" className={`text-gray-500 flex items-center p-2 pr-8 rounded-lg hover:bg-gray-100 group hover:text-green`}>کرتین وال</Link>
                            </li>
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Menu;