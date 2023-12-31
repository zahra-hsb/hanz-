import Link from "next/link"

const CategorySection = () => {
    return (
        <>
            <section className="flex flex-col w-full items-center mt-10">
                <div className="flex flex-col lg:w-[90%] lg:m-auto w-full items-center ">

                    <div className="p-10">
                        <h4 className="lg:text-xl text-lg opacity-[76%]">
                            دسته بندی محصولات
                        </h4>
                    </div>
                    <div className="flex flex-row w-full gap-3 items-center justify-around flex-wrap">
                        <div className="flex flex-col items-center justify-between cursor-pointer  hover:text-green hover:opacity-100">
                            <Link href={'/#'} className="lg:w-[200px] w-[180px] lg:h-[200px] h-[180px] flex items-center justify-center bg-green rounded-2xl hover:shadow-2xl">
                                <svg width="115" height="115" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.04541 0V77.9579V135H132.954V77.9579V0H2.04541ZM85.016 51.338H49.9839V5.70421H85.016V51.338ZM7.57677 5.70421H44.4526V57.0421V77.9579H7.57677V5.70421ZM7.57677 83.662H44.4526V129.296H7.57677V83.662ZM49.9839 129.296V77.9579V57.0421H85.016V77.9579V129.296H49.9839ZM127.423 129.296H90.5473V83.662H127.423V129.296ZM90.5473 77.9579V57.0421V5.70421H127.423V77.9579H90.5473Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href={'/#'} className="mt-4 text-base opacity-[65%] font-bold">نما</Link>
                        </div>
                        <div className="flex flex-col items-center justify-between cursor-pointer hover:text-green hover:opacity-100">
                            <Link href={'/#'} className="lg:w-[200px] w-[180px] lg:h-[200px] h-[180px] flex items-center justify-center bg-green rounded-2xl hover:shadow-2xl">
                                <svg width="115" height="115" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M133.758 3.30607L98.8255 14.4047L66.8863 4.23692L34.9475 14.3689L0.0142822 3.27026V132.588L34.9475 121.489L66.8863 131.621L98.8255 121.489L133.758 132.588V3.30607ZM69.8808 10.8961L95.8311 19.1306V116.763L69.8808 124.998V10.8961ZM6.00282 10.8961L31.9532 19.1306V116.763L6.00282 124.998V10.8961ZM37.9416 19.1306L63.8922 10.8961V125.033L37.9416 116.799V19.1306ZM127.77 125.033L101.82 116.799V19.1306L127.77 10.8961V125.033Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href={'/#'} className="mt-4 text-base opacity-[65%] font-bold">اسلاید</Link>
                        </div>
                        <div className="flex flex-col items-center justify-between cursor-pointer hover:text-green hover:opacity-100">
                            <Link href={'/#'} className="lg:w-[200px] w-[180px] lg:h-[200px] h-[180px] flex items-center justify-center bg-green rounded-2xl hover:shadow-2xl">
                                <svg width="100" height="130" viewBox="0 0 112 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.791 137.498H3.24072V3.39136H108.791V137.498ZM10.1245 131.832H101.908V9.05783H10.1245V131.832Z" fill="white" />
                                    <path d="M86.9949 55.3345H80.1111V85.5557H86.9949V55.3345Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href={'/#'} className="mt-4 text-base opacity-[65%] font-bold">درب</Link>
                        </div>
                        <div className="flex flex-col items-center justify-between cursor-pointer hover:text-green hover:opacity-100">
                            <Link href={'/#'} className="lg:w-[200px] w-[180px] lg:h-[200px] h-[180px] flex items-center justify-center bg-green rounded-2xl hover:shadow-2xl">
                                <svg width="82" height="130" viewBox="0 0 94 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M91.2793 124.135H2.69275V3.4397H91.2793V124.135ZM8.47013 118.388H85.5021V9.18712H8.47013V118.388Z" fill="white" />
                                    <path d="M91.2793 133.717H2.69275V139.464H91.2793V133.717Z" fill="white" />
                                    <path d="M47.831 39.1479L31.1633 55.729L35.2486 59.793L51.9162 43.2119L47.831 39.1479Z" fill="white" />
                                    <path d="M64.2343 44.5605L24.7715 83.8187L28.8567 87.8827L68.3195 48.6245L64.2343 44.5605Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href={'/#'} className="mt-4 text-base opacity-[65%] font-bold">پنجره</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategorySection