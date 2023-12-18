import Link from 'next/link'
const Main = () => {
    return (
        <>
            <main className="w-full h-[500px] relative p-20 lg:pr-20 bg-mainSection bg-center text-white">
                <div className="flex flex-col">
                    <div className="p-4 mt-5">
                        <h3 className="absolute z-50 text-3xl py-4 px-2 ml-4 border-y-4 border-r-4 border-green">
                            سیستم های نوین درب و پنجره
                        </h3>
                    </div>
                    <div className="p-1">
                        <Link href={'/products'} className="absolute z-50 mt-32 lg:mt-20 mr-3 px-2 w-[200px]">
                            مشاهده بیشتر
                            <span className='transform hover:translate-x-3'> ←</span>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
            </main>
        </>
    )
}

export default Main