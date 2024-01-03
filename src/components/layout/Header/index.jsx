import { useEffect, useState } from "react";
import { toggleOverflow } from "@/components/utils";

const Header = ({ setSidebarShow, router }) => {
    const [pageName, setPageName] = useState('ohki');

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
            <header className="fixed bg-white z-30 flex justify-start items-center w-full h-[50px] border-b">
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
                <div>
                    {/* <Image src={Logo} alt="logo"/> */}
                </div>
            </header>
        </>
    )
}

export default Header;