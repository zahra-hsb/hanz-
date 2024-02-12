import Slider from "@/components/globalComponents/Slider";
import curtainWall1 from '../../../../public/image/curtainWall1.jpg'
import curtainWall2 from '../../../../public/image/curtainWall2.jpg'
import curtainWall3 from '../../../../public/image/curtainWall3.jpg'
import Button from "@/components/globalComponents/Main/button";



export default function Cratinwall() {
  const slides = [
    { image: curtainWall1, text: 'طراحی محتاطانه و مینیمالیستی' },
    { image: curtainWall2, text: 'قابلیت تحمل باد تا سرعت 20 متر بر ثانیه' },
    { image: curtainWall3, text: 'پارچه شفاف در رنگ های مختلف' },
    { image: curtainWall2, text: 'در کانال های هدایت جانبی به بالا و پایین می لغزد' }
  ]

  return (
    <>
      <div id="cratinwall"></div>
      <div className="w-full mb-20">
        <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
          <div>
            <h2>کرتین وال</h2>
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
            textColor={'text-gray-600'}
          />
        </div>
      </div>
    </>
  );
}