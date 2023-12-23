import Image from "next/image";
import Logo from "../../../../public/image/logo.png"
import { toggleOverflow } from "@/components/utils";
const Header = ({ setSidebarShow }) => {
    return (
        <>
            <header className="flex justify-start items-center w-full h-[50px] drop-shadow">
                <div className="flex justify-start items-center">
                    <div
                        className="lg:hidden mr-4">
                        <button
                            onClick={() => {
                                setSidebarShow((s) => !s)
                                toggleOverflow()

                            }}

                            type="button" class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="mr-4">
                        <p>خانه</p>
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