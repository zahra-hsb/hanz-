import AgencyForm from "@/components/agencyComponents/AgencyForm"
import Main from "@/components/globalComponents/Main"
import Image from "next/image"
import FormIcon from '../../../public/icons/noun-form-122196.svg'
const Agency = () => {
    return (
        <>
            <Main title={'نمایندگی'} bg={'bg-agencySection'} height={'h-[50vh]'} display={'hidden'} />
            <div className="flex ">
                <div>
                    <Image src={FormIcon} alt="form"/>
                    <p>
                        برای ارسال درخواست نمایندگی، فرم روبرو را پر کنید. پشتیبان های ما با شما تماس خواهند گرفت.
                    </p>
                </div>
                <div className="w-full sm:p-20 py-20 p-10">
                    <AgencyForm />
                </div>
            </div>
        </>
    )
}

export default Agency