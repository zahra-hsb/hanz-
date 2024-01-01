import Button from './button'
const Main = ({ title, text, bg, display, height }) => {
    return (
        <>
            <main className={`w-full ${height} relative sm:p-20 px-[5%] mt-[50px] lg:pr-20 ${bg} bg-center bg-cover text-white`}>
                <div className="flex flex-col">
                    <div className="lg:p-4 p-2 mt-5">
                        <div className="absolute z-10 py-4 px-2 mt-20 ml-4 sm:mt-5 border-y-4 border-r-4 border-green">
                            <h3 className="lg:text-4xl sm:text-2xl text-xl">
                                {title}
                            </h3>
                            <p className={`'${display} mt-4 text-justify lg:text-lg sm:text-sm text-xs hidden sm:block`}>
                                {text}
                            </p>
                        </div>
                    </div>
                    <div className={`${display} p-1 absolute z-10 mt-[220px] mr-3 px-2 w-[200px]`}>
                        <Button title={' مشاهده بیشتر'} url={'/products'} color={'text-white text-sm lg:text-lg'} hover={'hover:text-green'} />
                    </div>
                </div>
                <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
            </main>
        </>
    )
}

export default Main