import Image from "next/image";
import Logo from "../../../../public/image/logo.png"
const Header = ({ show, setShow }) => {
    return (
        <>
            <header className="flex justify-start items-center w-full h-[50px] drop-shadow">
                <div className="flex justify-start items-center">
                    <div
                        className="lg:hidden mr-4"
                    onClick={() => setShow(!show)}
                    >
                        |||
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