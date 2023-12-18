import Image from "next/image"
import picture from '../../../../public/image/Shayco-Ghorfe.png'

const AboutSection = () => {
    return (
        <>
            <section className="flex flex-col pt-5 w-full">
                <div className="flex w-full items-center justify-between gap-5 flex-wrap">
                    <div className="h-full">
                        <Image src={picture} alt="hanz" />
                    </div>
                    <div className="p-2 w-[50%]">
                        <div>
                            <h4 className="text-2xl font-bold opacity-[76%]">
                                گروه صنعتی
                                <span className="text-5xl text-green opacity-1"> هانز</span>
                            </h4>
                        </div>
                        <div>
                            <p className="py-5 w-5/6 text-justify opacity-50 text-base">
                                از معتبرترین شرکت های طراحی و تولید کننده سیستم های نوین درب و پنجره و
                                نمای ساختمان است که با استفاده از دانش روز و تکنولوژی برتر در کشور از سال 1384 ،
                                با ظرفیت اولیه 11000 تن در شهر تهران و در زمینی به مساحت 15000 متر مربع ...

                            </p>
                        </div>
                        <div>
                            <button className="text-green text-sm px-4 py-1 border-2 border-green rounded-3xl">درباره ما ←</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-5 m-10">
                    <div>
                        <h4 className="text-base font-bold">
                            واحد طراحی سیستم <span className="opacity-50">(SYSTEM DESIGN LINE):</span>
                        </h4>
                    </div>
                    <div>
                        <p className="py-5 w-5/6 text-justify opacity-50 text-base">
                        شرکت شایکو افتخار دارد در این واحد به کمک مهندسین مجرب و جوان و کار آزموده
                         و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم 
                        های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمانی
                         جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.
                        </p>
                    </div>
                </div>
                <div className="flex w-full items-center justify-around flex-wrap">
                    <div className="h-full">1111111111111</div>
                    <div className="p-2">
                        <div>212222222222</div>
                        <div>223333333333</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection