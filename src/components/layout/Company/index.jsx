import Button from "../Main/button"
import BigSlider from "../Slider/BigSlider"

import banner from '../../../../public/image/cuh_banner.png'
import AboutSection2 from "../AboutSection2"


const Company = () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <div className="flex items-center justify-between p-3 mb-4 sm:p-8">
                    <div>
                        <h3 className="text-xl opacity-[76%]">
                            گروه صنعتی هانز
                        </h3>
                    </div>
                    <div>
                        <Button url={'/about'} title={'درباره ما'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'}/>
                    </div>
                </div>
                <div>
                    <BigSlider slidesPerView={1} textSlider={false} banner={banner} />
                </div>
            </section>
            <AboutSection2 />
        </>
    )
}

export default Company