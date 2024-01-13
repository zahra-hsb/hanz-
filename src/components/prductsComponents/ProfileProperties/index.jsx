import Slider from "@/components/globalComponents/Slider";
import profileGh1 from '../../../../public/image/profile-gh1.jpg'
import profileGh2 from '../../../../public/image/profile-gh2.jpg'
import profileGh3 from '../../../../public/image/profile-gh3.jpg'
import profileGh4 from '../../../../public/image/profile-gh4.jpg'
import Button from "@/components/globalComponents/Main/button";


export default function ProfileProperties() {
    return (
        <>
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
        </>
    );
}