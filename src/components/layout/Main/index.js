import Button from './button'
const Main = () => {
    return (
        <>
            <main className="w-full h-[500px] relative sm:p-20 px-[5%] pt-[100px] mt-[45px] lg:pr-20 bg-mainSection bg-center text-white">
                <div className="flex flex-col">
                    <div className="lg:p-4 p-2 mt-5">
                        <h3 className="absolute z-10 lg:text-4xl sm:text-2xl text-xl py-4 px-2 ml-4 mt-5 border-y-4 border-r-4 border-green">
                            سیستم های نوین درب و پنجره
                        </h3>
                    </div>
                    <div className="p-1 absolute z-10 mt-[150px] mr-3 px-2 w-[200px]">
                        <Button title={' مشاهده بیشتر'} url={'/products'} color={'text-white text-sm lg:text-lg'}/>
                    </div>
                </div>
                <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
            </main>
        </>
    )
}

export default Main