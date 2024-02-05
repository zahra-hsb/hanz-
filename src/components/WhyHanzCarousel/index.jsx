import Slider from "../globalComponents/Slider"
import time from "../../../public/icons/about/time-svgrepo-com.svg"
import timeCheck from "../../../public/icons/about/time-check-svgrepo-com.svg"
import medal from "../../../public/icons/about/medal-ribbon-star-svgrepo-com.svg"
import dollar from "../../../public/icons/about/dollar-circle-list-svgrepo-com.svg"

const icons = [
    { image: time, text: 'صرفه جویی در زمان' },
    { image: timeCheck, text: 'زمان بندی مناسب' },
    { image: medal, text: 'تعهد' },
    { image: dollar, text: 'صرفه جویی در هزینه حمل و نقل' },
]


const WhyHanzCarousel = () => {
    return (
        <>
            <div className="py-5 px-10" id="">
                <Slider url={''} slidesPerView={5} slides={icons} textSlider={true} textColor={'mb-5'} id={'about-icons'} />
            </div>
        </>
    )
}

export default WhyHanzCarousel