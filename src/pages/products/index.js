import Slider from "@/components/globalComponents/Slider";
import styles from "./products.module.css";
import image1 from '../../../public/image/Aluminium-Safety-children-1.jpg'
import image2 from '../../../public/image/Aluminium-acoustic-insulation-2.jpg'
import image3 from '../../../public/image/Aluminium-life-cycle-3.jpg'
import image4 from '../../../public/image/Aluminium-recyclability-4.jpg'
import profile1 from '../../../public/image/profile1.webp'
import profile2 from '../../../public/image/profile2.webp'
import profile3 from '../../../public/image/profile3.webp'
import profileGh1 from '../../../public/image/profile-gh1.jpg'
import profileGh2 from '../../../public/image/profile-gh2.jpg'
import profileGh3 from '../../../public/image/profile-gh3.jpg'
import profileGh4 from '../../../public/image/profile-gh4.jpg'
import curtainWall1 from '../../../public/image/curtainWall1.jpg'
import curtainWall2 from '../../../public/image/curtainWall2.jpg'
import curtainWall3 from '../../../public/image/curtainWall3.jpg'
import Button from "@/components/globalComponents/Main/button";
import Main from "@/components/globalComponents/Main";

export default function Products() {
  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'محصولات'} bg={'bg-productSection'} height={'h-[390px]'} display={'hidden'} />
      <div className=" w-[90%] m-auto">
        <div className="mt-20 mb-10 text-gray-600">
          <div>
            <h4 className="text-2xl opacity-[76%]">
              محصولات
              <span className="text-5xl text-green opacity-1"> هانز</span>
            </h4>
          </div>
        </div>

        <div>
          <p className="lg:w-5/6 text-justify text-gray-600 text-lg">سیستم‌های باکیفیت ما سخت‌گیرانه‌ترین خواسته‌ها را از نظر راحتی، انرژی، امنیت، طراحی معماری و بهره‌وری انرژی برآورده می‌کنند.</p>
        </div>

        <div className="mt-20 mb-10 text-gray-600">
          <div>
            <h4 className="text-2xl opacity-[76%]">
              نماها
            </h4>
          </div>
        </div>
        <div>
          <p className="lg:w-5/6 text-justify text-gray-600 text-lg">
            ما راه حل نما را داریم که با تمام نیازهای ساختمان شما مطابقت دارد. نماهای چوبی زمان ساخت شما را بهینه می کنند، نماهای یکپارچه زمان نصب را محدود می کنند و دیوارهای پنجره به شدت هزینه های کلی محصول شما را کاهش می دهد. چه پروفیل های شیشه ای کامل یا آلومینیومی را انتخاب کنید، ما همیشه مناسب با کیفیت بالا را برای شما ارائه می دهیم.
          </p>
        </div>

        <div id="profile"></div>
        <div className="w-full">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
            <div>
              <h2>پروفیل</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider slidesPerView={3} image1={profile1} image2={profile3} image3={profile2} image4={profile3} textSlider={true} textSlider1={'کنترل دقیق فرآیند'} textSlider2={'ظرفیت تولید'} textSlider3={'تجهیزات پیشرفته'} textSlider4={'قاب منظره آلومینیومی'} sliderCount={''} />
          </div>
        </div>

        <div id="profile-properties"></div>
        <div className="w-full">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
            <div>
              <h2>متعلقات</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider slidesPerView={3} image1={profileGh1} image2={profileGh2} image3={profileGh3} image4={profileGh4} textSlider={true} textSlider1={'پیچ به جای جوش'} textSlider2={'اتصال آسان پروفیل های آلومینیومی'} textSlider3={'نوآوری از آیتم ایده های نوآورانه'} textSlider4={'پروفیل های ویژه آیتم مواد ویژه'} sliderCount={''} />
          </div>
        </div>

        <div id="cratinwall"></div>
        <div className="w-full mb-40">
          <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
            <div>
              <h2>کراتین وال</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/products'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider slidesPerView={3} image1={curtainWall1} image2={curtainWall2} image3={curtainWall3} image4={curtainWall2} textSlider={true} textSlider1={'طراحی محتاطانه و مینیمالیستی'} textSlider2={'قابلیت تحمل باد تا سرعت 20 متر بر ثانیه'} textSlider3={'پارچه شفاف در رنگ های مختلف'} textSlider4={'در کانال های هدایت جانبی به بالا و پایین می لغزد'} sliderCount={''} />
          </div>
        </div>



      </div>
    </main>
  );
}
