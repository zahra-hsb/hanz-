import Button from "../../globalComponents/Main/button"
import Slider from "../../globalComponents/Slider"
import image1 from '../../../../public/image/Aluminium-Safety-children-1.jpg'
import image2 from '../../../../public/image/Aluminium-acoustic-insulation-2.jpg'
import image3 from '../../../../public/image/Aluminium-life-cycle-3.jpg'
import image4 from '../../../../public/image/Aluminium-recyclability-4.jpg'

const Carousel = () => {
    return (
        <>

            <section className="flex flex-col w-full py-5 sm:mb-36 mb-24 mt-16">
                <div className="lg:w-[90%] lg:m-auto">
                    <div className="flex items-center justify-between p-3 my-4">
                        <div>

                            <h3>پروژه های انجام شده</h3>
                        </div>
                        <div>
                            <Button title={'درباره ما'} url={'/about'} border={'border-2 border-green'} color={'text-green text-sm'} hover={'hover:bg-green hover:text-white'} />

                        </div>
                    </div>
                    <div id="home-carousel">
                        <Slider slidesPerView={3} image1={image1} image2={image2} image3={image3} image4={image4} textSlider={true} textSlider1={'چرخه زندگی آلومینیوم'} textSlider2={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider3={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider4={'نحوه بستن حلقه بازیافت آلومینیوم'} sliderCount={''} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Carousel