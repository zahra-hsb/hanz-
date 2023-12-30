import Link from "next/link"

const Menu = ({ selectedTab, setSelectedTab, handleTabClick }) => {
    const menuItem = [
        { tab: 'home', label: 'خانه' },
        { tab: 'products', label: 'معرفی محصول' },
        { tab: 'galleryImage', label: 'گالری تصاویر' },
        { tab: 'about', label: 'درباره ما' },
        { tab: 'callUs', label: 'تماس با ما' }
    ]

    return (
        <ul class="space-y-2 font-medium">
            {menuItem.map(item => (
                <li key={item.tab}>
                    <Link
                        href={item.tab === 'home' ? '/' : item.tab}
                        className={`${selectedTab === item.tab ? 'text-green' : 'text-gray-500'} flex items-center p-2 rounded-lg hover:bg-gray-100 group hover:text-green`}
                        onClick={() => handleTabClick(item.tab)}
                    >
                        <span className="nav-link ms-3">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu;