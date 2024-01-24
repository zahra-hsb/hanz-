import Button from "../../globalComponents/Main/button"
import Slider from "../../globalComponents/Slider"
import image1 from '../../../../public/image/Aluminium-Safety-children-1.jpg'
import image2 from '../../../../public/image/Aluminium-acoustic-insulation-2.jpg'
import image3 from '../../../../public/image/Aluminium-life-cycle-3.jpg'
import image4 from '../../../../public/image/Aluminium-recyclability-4.jpg'

const Carousel = () => {
    const slides = [
        { image: image1, text: 'چرخه زندگی آلومینیوم' },
        { image: image2, text: 'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید' },
        { image: image3, text: 'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید' },
        { image: image4, text: 'نحوه بستن حلقه بازیافت آلومینیوم' }
    ]

    return (
        <>

            <section className="flex flex-col w-full py-5 sm:mb-36 mb-24 mt-16">
                <div className="lg:w-[90%] lg:m-auto">
                    <div className="flex items-center justify-between p-3 my-4">
                        <div>
                            <h3 className="text-lg opacity-[76%]">چرا باید از آلومینیوم استفاده کنیم:</h3>
                        </div>
                    </div>
                    <div id="home-carousel">
                        <Slider
                            url='/imageGallery'
                            slidesPerView={3}
                            slides={slides}
                            textSlider={true}
                            textColor={'text-gray-600'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Carousel