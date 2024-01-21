import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'


export default function WhyHanz() {
  const slides = [
    { image: hanzProfile1, text: 'کنترل دقیق فرآیند' },
    { image: hanzProfile3, text: 'ظرفیت تولید' },
    { image: hanzProfile2, text: 'تجهیزات پیشرفته' },
    { image: hanzProfile3, text: 'قاب منظره آلومینیومی' }
  ]

  return (
    <>
      <div className="w-full">
        <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
          <div>
            <h2>چرا هانز</h2>
          </div>

        </div>
        <div id="home-carousel" className="w-full">
          <Slider
            url='/products'
            slidesPerView={3}
            slides={slides}
            textSlider={true}
          />
        </div>
      </div>
    </>
  );
}