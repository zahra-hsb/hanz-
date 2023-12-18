import Link from 'next/link'
const Main = () => {
    return (
        <>
            <main className="w-full h-[350px] relative p-8 bg-mainSection bg-center text-white">
                <div className="flex flex-col">
                    <div className="p-4 mt-5">
                        <h3 className="absolute z-50 text-3xl py-4 px-2 border-y-4 border-r-4 border-green">
                            سیستم های نوین درب و پنجره
                        </h3>
                    </div>
                    <div className="p-1">
                        <Link href={'/products'} className="absolute z-50 mt-20 mr-3 px-2">
                        مشاهده بیشتر ← 
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
            </main>
        </>
    )
}

export default Main