import Slider from "@/components/globalComponents/Slider";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'
import profile1 from '../../../../public/image/profile-1.jpg'
import profile2 from '../../../../public/image/profile-2.jpg'
import profile3 from '../../../../public/image/profile-3.jpg'
import profileGh1 from '../../../../public/image/profile-gh1.jpg'
import profileGh2 from '../../../../public/image/profile-gh2.jpg'
import profileGh3 from '../../../../public/image/profile-gh3.jpg'
import profileGh4 from '../../../../public/image/profile-gh4.jpg'
import curtainWall1 from '../../../../public/image/curtainWall1.jpg'
import curtainWall2 from '../../../../public/image/curtainWall2.jpg'
import curtainWall3 from '../../../../public/image/curtainWall3.jpg'
import Button from "@/components/globalComponents/Main/button";
import MainSection from "../MainSection";
import Main from "@/components/globalComponents/Main";
import Profile from "../profile";


export default function OurProducts() {
  return (
    <>
      <Main title={'محصولات'} bg={'bg-productSection'} height={'h-[390px]'} display={'hidden'} />

      <div className="w-[100%] sm:w-[90%] m-auto">
        <MainSection />

        <div className="w-full">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
            <div>
              <h2>چرا هانز</h2>
            </div>

          </div>
          <div id="home-carousel" className="w-full">
            <Slider url={'/products'} slidesPerView={3} image1={hanzProfile1} image2={hanzProfile3} image3={hanzProfile2} image4={hanzProfile3} textSlider={true} textSlider1={'کنترل دقیق فرآیند'} textSlider2={'ظرفیت تولید'} textSlider3={'تجهیزات پیشرفته'} textSlider4={'قاب منظره آلومینیومی'} sliderCount={''} />
          </div>
        </div>

        <Profile />

        <div id="profile-properties"></div>
        <div className="w-full">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
            <div>
              <h2>متعلقات</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider url={'/products'} slidesPerView={3} image1={profileGh1} image2={profileGh2} image3={profileGh3} image4={profileGh4} textSlider={true} textSlider1={'پیچ به جای جوش'} textSlider2={'اتصال آسان پروفیل های آلومینیومی'} textSlider3={'نوآوری از آیتم ایده های نوآورانه'} textSlider4={'پروفیل های ویژه آیتم مواد ویژه'} sliderCount={''} />
          </div>
        </div>

        <div id="cratinwall"></div>
        <div className="w-full mb-20">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600 w-[90%] sm:w-[100%] m-auto">
            <div>
              <h2>کراتین وال</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider url={'/products'} slidesPerView={3} image1={curtainWall1} image2={curtainWall2} image3={curtainWall3} image4={curtainWall2} textSlider={true} textSlider1={'طراحی محتاطانه و مینیمالیستی'} textSlider2={'قابلیت تحمل باد تا سرعت 20 متر بر ثانیه'} textSlider3={'پارچه شفاف در رنگ های مختلف'} textSlider4={'در کانال های هدایت جانبی به بالا و پایین می لغزد'} sliderCount={''} />
          </div>
        </div>

      </div>
    </>
  );
}