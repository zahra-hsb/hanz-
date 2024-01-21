import Picture2 from '../../../../public/image/image4.png'
import Image from 'next/image'

const Design = () => {
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <div className="flex flex-col lg:flex-row gap-5 items-center justify-between lg:w-[90%] lg:m-auto">
                    <div>
                        <Image src={Picture2} alt="hanz" />
                    </div>
                    <div className="p-8 lg:p-auto lg:w-[50%]">
                        <div>
                            <h4 className="text-lg opacity-83">
                                واحد طراحی سیستم <span className="opacity-50">(SYSTEM DESIGN LINE):</span>
                            </h4>
                        </div>
                        <div>
                            <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                                شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب و جوان و کار آزموده
                                و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم
                                های مدرن و نوین در بخش صنعت ساختمان به خصوص پروفیل های مدرن و نوین ساختمانی
                                جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Design 