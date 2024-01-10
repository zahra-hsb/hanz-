import Slider from "@/components/globalComponents/Slider";
import styles from "./products.module.css";
import image1 from '../../../public/image/Aluminium-Safety-children-1.jpg'
import image2 from '../../../public/image/Aluminium-acoustic-insulation-2.jpg'
import image3 from '../../../public/image/Aluminium-life-cycle-3.jpg'
import image4 from '../../../public/image/Aluminium-recyclability-4.jpg'
import Button from "@/components/globalComponents/Main/button";

export default function Products() {
  return (
    <main className="flex flex-col justify-center items-center mt-[50px] pb-[50px]">
      <div className=" w-[90%] m-auto">
        <div className="my-20 text-3xl text-gray-600">
          <h2>محصولات</h2>
        </div>

        <p>bbbbbbb</p>

        <div id="profile"></div>
          <div className="w-full">
            <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
            <div>
              <h2>پروفیل</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/about'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider slidesPerView={3} image1={image1} image2={image2} image3={image3} image4={image4} textSlider={true} textSlider1={'چرخه زندگی آلومینیوم'} textSlider2={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider3={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider4={'نحوه بستن حلقه بازیافت آلومینیوم'} sliderCount={''} />
          </div>
        </div>

        <div id="profile-properties"></div>
          <div className="w-full">
            <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
            <div>
              <h2>متعلقات</h2>
            </div>

            <div>
              <Button title={'بیشتر'} url={'/about'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
            </div>
          </div>
          <div id="home-carousel" className="w-full">
            <Slider slidesPerView={3} image1={image1} image2={image2} image3={image3} image4={image4} textSlider={true} textSlider1={'چرخه زندگی آلومینیوم'} textSlider2={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider3={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider4={'نحوه بستن حلقه بازیافت آلومینیوم'} sliderCount={''} />
          </div>
        </div>

        <div id="cratinwall"></div>
          <div className="w-full">
            <div className="mt-[90px] mb-10 flex justify-between items-center text-xl text-gray-600">
              <div>
                <h2>کراتین وال</h2>
              </div>

              <div>
                <Button title={'بیشتر'} url={'/about'} border={'border-2 border-green'} hover={'hover:bg-green hover:text-white'} />
              </div>
            </div>
            <div id="home-carousel" className="w-full">
              <Slider slidesPerView={3} image1={image1} image2={image2} image3={image3} image4={image4} textSlider={true} textSlider1={'چرخه زندگی آلومینیوم'} textSlider2={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider3={'عایق صوتی: صدای ناخواسته داخل خانه را کاهش دهید'} textSlider4={'نحوه بستن حلقه بازیافت آلومینیوم'} sliderCount={''} />
            </div>
          </div>
        


      </div>
    </main>
  );
}
