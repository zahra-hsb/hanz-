import AssistForm from "@/components/agencyComponents/AssistForm"
import Main from "@/components/globalComponents/Main"
import Image from "next/image"
import Link from "next/link"
import FormIcon from '../../../public/icons/noun-form-122196.svg'

const Assist = () => {
    return (
        <>
            <Main title={'دعوت به همکاری'} bg={'bg-assistSection'} height={'h-[400px]'} display={'hidden'} />
            <div className="flex flex-col sm:flex-row items-center justify-center">
                <div className="w-full sm:p-10 p-10 opacity-80 flex flex-col items-center justify-center text-justify">
                    <Image src={FormIcon} alt="form" />
                    <p className="leading-10">
                        برای ارسال درخواست همکاری، فرم روبرو را لطفا با دقت پر کنید. پشتیبان های ما با شما تماس خواهند گرفت.
                    </p>
                    <p className="py-10 text-sm">
                        در صورت داشتن سوال
                        با ما تماس بگیرید و سوالات خود را با ما در میان بگذارید.
                        <Link href={'/contactUs'} className="hover:text-green px-1 underline">
                            اینجا کلیک کنید.
                        </Link>
                    </p>
                </div>
                <div className="w-full sm:p-20 py-20 p-10">
                    <AssistForm />
                </div>
            </div>
        </>
    )
}

export default Assist