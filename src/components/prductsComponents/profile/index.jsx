import Slider from "@/components/globalComponents/Slider";
import profile1 from '../../../../public/image/profile-1.jpg'
import profile2 from '../../../../public/image/profile-2.jpg'
import profile3 from '../../../../public/image/profile-3.jpg'
import Button from "@/components/globalComponents/Main/button";


export default function Profile() {
  const slides = [
    { image: profile1, text: 'System 140-SLIM' },
    { image: profile3, text: 'System SL-95T' },
    { image: profile2, text: 'System 95T-MONO' },
    { image: profile3, text: 'System SL-95T' }
  ]

  return (
    <>
      <div id="profile"></div>
      <div className="w-full">
        <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
          <div>
            <h2>پروفیل</h2>
          </div>

          <div>
            <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
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