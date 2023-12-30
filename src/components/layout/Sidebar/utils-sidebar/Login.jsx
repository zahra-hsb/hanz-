import Link from "next/link";

const Login = () => {
    return (
        <Link href='https://hanzalu.com/erp/'>
            <div className="flex text-center bg-green h-[64px] text-lg text-white">
                <div className="flex items-center justify-center basis-[100%]">
                    <p>ورود به پنل فروش</p>
                </div>
            </div>
        </Link>
    )
}

export default Login;