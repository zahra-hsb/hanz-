import Button from "../Main/button"
import BigSlider from "../Slider/BigSlider"

import banner from '../../../../public/image/cuh_banner.png'


const Company = () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <div className="flex items-center justify-between px-20 py-14">
                    <div>
                        <h3 className="text-2xl opacity-[76%]">
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
        </>
    )
}

export default Company