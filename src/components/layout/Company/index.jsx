import Button from "../Main/button"
import BigSlider from "../Slider/BigSlider"
import Pic from '../../../../public/image/image5.png'
import Image from 'next/image'

const Company = () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <div className="flex items-center justify-between px-20 py-14">
                    <div>
                        <h3 className="text-2xl font-bold">
                            گروه صنعتی هانز
                        </h3>
                    </div>
                    <div>
                        <Button url={'/about'} title={'درباره ما'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'}/>
                    </div>
                </div>
                <div>
                    <BigSlider slidesPerView={1} textSlider={false} />
                </div>
            </section>
            <section className="flex w-full flex-col lg:flex-row items-center justify-center gap-5 pt-20">
                <div className="flex justify-between items-center xl:w-[95%]">

                    <div className="h-full lg:m-10">
                        <Image src={Pic} alt='hanz' />
                    </div>
                    <div className="lg:w-1/2 p-5 m-5 lg:m-10">
                        <div>
                            <h3 className="text-xl font-bold opacity-80">
                                واحد اکستروژن <span className="opacity-50">(EXTRUSION LINE):</span>
                            </h3>
                        </div>
                        <div>
                            <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                                شرکت شایکو مجهز به یک دستگاه پرس 2500 تن اکستروژن با دبل پولر
                                هوایی فول اتوماتیک از شرکت زیمنس آلمان و میز فول
                                اتوماتیک انتقال پروفیل و قسمت استرج و دستگاه ایجینگ القایی با
                                قابلیت سختکاری پروفیل باآلیاژ 6063 تا 14 وبستر سختی را داراست.
                            </p>
                        </div>
                        <div>
                            <Button url={'/about'} title={'درباره ما'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company