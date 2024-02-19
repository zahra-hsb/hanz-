import Main from "@/components/globalComponents/Main";
import ProductCategory from "@/components/prductsComponents/ProductCategory";
import ProfileShutterImage from "../../../../public/image/catalogue3d/shutter.png"
import ProfileSkyLightImage from "../../../../public/image/catalogue3d/skylight.png"
import ProfileHandRailImage from "../../../../public/image/catalogue3d/hand-rail.png"
import hingeImg from "../../../../public/image/catalogue3d/profile-2.jpg"
import slidingImg from "../../../../public/image/catalogue3d/profile-1.jpg"
import noneProfile from '../../../../public/image/catalogue3d/none-profile.jpg'

export default function Industrial() {

  const industrialArray = [
    { image: noneProfile, text: 'وال واشر' },
    { image: noneProfile, text: 'هیت سینک' },
    { image: noneProfile, text: 'گلخانه' },
    { image: noneProfile, text: 'الکترونیک' },
  ]

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'صنعتی'} bg={'bg-industrialSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <div>
          <div className="mt-20 mb-10 text-gray-600">
            <div>
              <h4 className="text-2xl opacity-[76%]">
                تولید
                <span className="text-4xl text-green opacity-1"> پروفیل</span>
              </h4>
            </div>
          </div>
          <div>
            <p className="lg:w-5/6 text-justify text-gray-600 text-lg">
              گروه صنعتی هانز محصولات آلومینیومی متنوعی در صنایع الکترونیک، پزشکی، لوازم خانگی و ابزارهای صنعتی با بهره مندی از خطوط متعدد تولیدی و قطعه سازی، آماده ی ارائه ی بهترین خدمات برای پاسخ به نیاز های متنوع مشتریان صنعتی است.            </p>
          </div>
        </div>
        <ProductCategory items={industrialArray} display={'hidden'} subCategory={'صنعتی'}
          text={'گروه صنعتی هانز با استفاده از تکنولوژی روز دنیا و به پشتیبانی تیم مهندسی مجرب، محصولات آلومینیومی متنوع تولید می کند.'} url={'#'} />


      </div>
    </main>
  );
}
