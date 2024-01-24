import Slider from "@/components/globalComponents/Slider";
import profileGh1 from '../../../../public/image/profile-gh1.jpg'
import profileGh2 from '../../../../public/image/profile-gh2.jpg'
import profileGh3 from '../../../../public/image/profile-gh3.jpg'
import profileGh4 from '../../../../public/image/profile-gh4.jpg'
import Button from "@/components/globalComponents/Main/button";


export default function ProfileProperties() {
    const slides = [
        { image: profileGh1, text: 'پیچ به جای جوش' },
        { image: profileGh2, text: 'اتصال آسان پروفیل های آلومینیومی' },
        { image: profileGh3, text: 'نوآوری از آیتم ایده های نوآورانه' },
        { image: profileGh4, text: 'پروفیل های ویژه آیتم مواد ویژه' }
    ]

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