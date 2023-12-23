import Link from "next/link"

const Menu = ({ selectedTab, setSelectedTab, handleTabClick }) => {
    return (
        <ul class="space-y-2 font-medium">
            <li>
                <Link
                    href="/"
                    className={`${selectedTab === 'home' ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
                    onClick={() => { handleTabClick('home') }}
                >

                    <span class="nav-link ms-3">خانه</span>
                </Link>
            </li>
            <li>
                <Link href="/products"
                    className={`${selectedTab === 'products' ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
                    onClick={() => { handleTabClick('products') }}
                >

                    <span class="nav-link flex-1 ms-3 whitespace-nowrap">معرفی محصول</span>
                </Link>
            </li>
            <li>
                <Link href="/galleryImage"
                    className={`${selectedTab === 'galleryImage' ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
                    onClick={() => { handleTabClick('galleryImage') }}
                >

                    <span class="nav-link flex-1 ms-3 whitespace-nowrap">گالری تصاویر</span>
                </Link>
            </li>
            <li>
                <Link href="/about"
                    className={`${selectedTab === 'about' ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
                    onClick={() => { handleTabClick('about') }}
                >

                    <span class="nav-link flex-1 ms-3 whitespace-nowrap">درباره ما</span>
                </Link>
            </li>
            <li>
                <Link href="/callUs"
                    className={`${selectedTab === 'callUs' ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group`}
                    onClick={() => { handleTabClick('callUs') }}
                >

                    <span class="nav-link flex-1 ms-3 whitespace-nowrap">تماس با ما</span>
                </Link>
            </li>
        </ul>
    )
}

export default Menu;