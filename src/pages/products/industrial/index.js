import Main from "@/components/globalComponents/Main";
import ProductCategory from "@/components/prductsComponents/ProductCategory";
import noneProfile from '../../../../public/image/catalogue3d/none-profile.jpg'
import wallwasher from '../../../../public/image/industrial/وال واشر.png'
import heatsink from '../../../../public/image/industrial/هیت سینگ.png'
import greenhouse from '../../../../public/image/industrial/گلخانه.png'

export default function Industrial() {

  const industrialArray = [
    { image: wallwasher, text: 'وال واشر' },
    { image: heatsink, text: 'هیت سینک' },
    { image: greenhouse, text: 'گلخانه' },
    { image: noneProfile, text: 'الکترونیک' },
  ]

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'صنعتی'} bg={'bg-industrialSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <div>
          <div id="industrial" className="mt-20 mb-10 text-gray-600">
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
          text={'گروه صنعتی هانز با استفاده از تکنولوژی روز دنیا و به پشتیبانی تیم مهندسی مجرب، محصولات آلومینیومی متنوع تولید می کند.'} url={'/industrial#industrial'} />


      </div>
    </main>
  );
}
