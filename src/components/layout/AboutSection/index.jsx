import Image from "next/image"
import Link from "next/link"
import picture from '../../../../public/image/Shayco-Ghorfe.png'
import Picture2 from '../../../../public/image/image4.png'
import Button from '../Main/button'

const AboutSection = () => {
    return (
        <>
            <section className="flex flex-col pt-5 w-full">
                <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-5">
                    <div className="lg:mr-10">
                        <Image src={picture} alt="hanz" />
                    </div>
                    <div className="p-8 lg:p-auto lg:w-[50%]">
                        <div>
                            <h4 className="text-2xl font-bold opacity-[76%]">
                                گروه صنعتی
                                <span className="text-5xl text-green opacity-1"> هانز</span>
                            </h4>
                        </div>
                        <div>
                            <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                                از معتبرترین شرکت های طراحی و تولید کننده سیستم های نوین درب و پنجره و
                                نمای ساختمان است که با استفاده از دانش روز و تکنولوژی برتر در کشور از سال 1384 ،
                                با ظرفیت اولیه 11000 تن در شهر تهران و در زمینی به مساحت 15000 متر مربع ...

                            </p>
                        </div>
                        <div>
                            <Button title={'درباره ما'} url={'/about'} border={'border-2 border-green'}/>

                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 p-5 m-5 lg:m-10">
                    <div>
                        <h4 className="text-lg font-bold">
                            واحد طراحی سیستم <span className="opacity-50">(SYSTEM DESIGN LINE):</span>
                        </h4>
                    </div>
                    <div>
                        <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                            شرکت شایکو افتخار دارد در این واحد به کمک مهندسین مجرب و جوان و کار آزموده
                            و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم
                            های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمانی
                            جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-5">
                    <div className="lg:mr-10">
                        <Image src={Picture2} alt="hanz" />
                    </div>
                    <div className="p-8 lg:p-auto lg:w-[50%]">
                        <div>
                            <h4 className="text-lg font-bold">
                                واحد طراحی سیستم <span className="opacity-50">(SYSTEM DESIGN LINE):</span>
                            </h4>
                        </div>
                        <div>
                            <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                                شرکت شایکو افتخار دارد در این واحد به کمک مهندسین مجرب و جوان و کار آزموده
                                و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم
                                های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمانی
                                جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection