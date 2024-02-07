import AgencyForm from "@/components/agencyComponents/AgencyForm"
import Main from "@/components/globalComponents/Main"

const Agency = () => {
    return (
        <>
            <Main title={'نمایندگی'} bg={'bg-agencySection'} height={'h-[50vh]'} display={'hidden'} />
            <div className="w-full sm:p-20 py-20 p-10">
                <AgencyForm />
            </div>
        </>
    )
}

export default Agency