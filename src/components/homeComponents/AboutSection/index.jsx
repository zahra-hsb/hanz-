import Image from "next/image"
import Link from "next/link"
import picture from '../../../../public/image/Shayco-Ghorfe.png'
import Picture2 from '../../../../public/image/image4.png'
import Button from '../../globalComponents/Main/button'

const AboutSection = () => {
    return (
        <>
            <section className="flex flex-col pt-5 w-full my-20">
                <div className="flex w-full lg:w-[90%] lg:m-auto flex-col lg:flex-row items-center justify-between">
                    <div>
                        <Image src={picture} alt="hanz" />
                    </div>
                    <div className="p-8 lg:p-auto lg:w-[50%]">
                        <div>
                            <h4 className="text-2xl opacity-[76%]">
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
                            <Button title={'درباره ما'} url={'/about'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection