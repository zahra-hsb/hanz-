import Image from "next/image"
import picture from '../../../../public/image/Shayco-Ghorfe.png'
import Button from '../../globalComponents/Main/button'

const AboutSection = () => {
    return (
        <>
            <section className="flex flex-col pt-5 w-full my-20">
                <div className="flex w-full lg:w-[90%] lg:m-auto flex-col lg:flex-row items-center justify-between">
                    {/* <div>
                        <Image src={picture} alt="hanz" />
                    </div> */}
                    <div className="p-8 lg:p-auto lg:w-[50%]">
                        <div>
                            <h4 className="text-2xl opacity-[76%]">
                                گروه صنعتی
                                <span className="text-5xl text-green opacity-1"> هانز</span>
                            </h4>
                        </div>
                        <div>
                            <p className="py-5 lg:w-5/6 text-justify opacity-50 text-lg">
                                شرکت هانز یکی از معتبرترین شرکت های طراحی و تولیدکننده سیستم های نوین آلومینیومی در کشور میباشد که با عقبه دیرینه خود اقدام به تولید کلی مقاطع آلومینیومی نموده است.
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