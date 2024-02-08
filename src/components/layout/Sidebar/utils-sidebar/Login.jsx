import Link from "next/link";

const Login = () => {
    return (
        <div className="flex text-center bg-green h-[64px]">
            <div className="flex items-center justify-center basis-[100%]">
                <div className="text-[#E3F4F4]">
                    <p className="mx-2">ورود به پنل</p>
                </div>
                <div className="flex items-center justify-center text-white">
                    <Link href='https://hanzalo.com/user/' className="hover:text-gray-200 hover:-translate-y-[1px]">
                        <p className="underline text-lg">فروش</p>
                    </Link>
                    <span className="mx-1 text-[#9AD0C2]">|</span>
                    <Link href='https://hanzalo.com/erp/' className="hover:text-gray-200 hover:-translate-y-[1px]">
                        <p className="underline text-lg">پرسنل</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Login;

