import Link from 'next/link';
import hanzIcon from '../../../../public/icons/hanz-logo.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const Sidebar = () => {

    const router = useRouter();
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
                <div className="flex justify-start pt-4 pr-6">
                    <div className='w-[150px] pt-5'>
                        <Image src={hanzIcon} alt="#" />
                    </div>
                </div>

                <div className="flex px-5 mt-[-70px]">

                    <div className="basis-[100%]">

                        <form>
                            <label for="default-search" className="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="outline-0 block w-full py-2 pl-5 ps-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:ring-green focus:border-green" placeholder="جستجو کنید..." required />

                            </div>
                        </form>

                    </div>
                </div>

                <div class="px-3 pb-4 mt-[-70px] overflow-y-auto">
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
                        {/* <li>
                            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                <span class="flex-1 ms-3 text-right whitespace-nowrap">E-commerce</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                                <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                </li>
                            </ul>
                        </li> */}
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
                </div>

                <div>

                    <div className="flex justify-between p-7">
                        <div className='w-6 h-6'>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#00ae8e" />
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#00ae8e" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#00ae8e" />
                            </svg>
                        </div>

                        <div className='w-6 h-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#00ae8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00ae8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div className='w-6 h-6'>

                            <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path fill='#00ae8e' d="M829.44 554.666667c-9.386667 0-19.2-2.986667-28.586667-5.12a402.773333 402.773333 0 0 1-55.893333-16.64 85.333333 85.333333 0 0 0-105.813333 42.666666l-9.386667 19.2a519.68 519.68 0 0 1-113.493333-85.333333 519.68 519.68 0 0 1-85.333334-113.493333l17.92-11.946667a85.333333 85.333333 0 0 0 42.666667-105.813333 440.746667 440.746667 0 0 1-16.64-55.893334c-2.133333-9.386667-3.84-19.2-5.12-29.013333a128 128 0 0 0-128-106.24h-128a128 128 0 0 0-128 145.493333 810.666667 810.666667 0 0 0 704.853333 702.293334h16.213334a128 128 0 0 0 85.333333-32.426667 128 128 0 0 0 42.666667-96v-128a128 128 0 0 0-105.386667-123.733333z m21.333333 256a42.666667 42.666667 0 0 1-14.506666 32 44.8 44.8 0 0 1-34.986667 10.666666A725.333333 725.333333 0 0 1 173.653333 222.72a46.506667 46.506667 0 0 1 10.666667-34.986667 42.666667 42.666667 0 0 1 32-14.506666h128a42.666667 42.666667 0 0 1 42.666667 33.706666q2.56 17.493333 6.4 34.56a474.453333 474.453333 0 0 0 19.626666 66.133334l-59.733333 27.733333a42.666667 42.666667 0 0 0-20.906667 56.746667 618.24 618.24 0 0 0 298.666667 298.666666 42.666667 42.666667 0 0 0 32.426667 0 42.666667 42.666667 0 0 0 24.32-22.186666l26.453333-59.733334a584.106667 584.106667 0 0 0 67.413333 19.626667q17.066667 3.84 34.56 6.4a42.666667 42.666667 0 0 1 33.706667 42.666667z" /></svg>
                        </div>

                        <div className='w-6 h-6'>
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z" fill="#00ae8e" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex text-center bg-green h-[64px] text-lg text-white">
                        <div className="flex items-center justify-center basis-[100%]">
                            <p>ورود / ثبت نام</p>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Sidebar;