import AgencyForm from "@/components/agencyComponents/AgencyForm"
import Main from "@/components/globalComponents/Main"

const Agency = () => {
    return (
        <>
            <Main title={'نمایندگی'} bg={'bg-agencySection'} height={'h-[50vh]'} display={'hidden'} />
            <div className="w-full sm:w-1/2 p-20">
                <AgencyForm />
            </div>
        </>
    )
}

export default Agency