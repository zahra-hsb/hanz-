import Main from "@/components/globalComponents/Main";
import Cratinwall from "@/components/prductsComponents/Cratinwall";
import Profile from "@/components/prductsComponents/profile";
import ProfileProperties from "@/components/prductsComponents/ProfileProperties";

export default function Accessory() {
  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'اکسسوری'} bg={'bg-profileSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <div>
          <div className="mt-20 mb-10 text-gray-600">
            <div>
              <h4 className="text-2xl opacity-[76%]">
                محصولات
                <span className="text-4xl text-green opacity-1"> صنعتی</span>
              </h4>
            </div>
          </div>
          <div>
            <p className="lg:w-5/6 text-justify text-gray-600 text-lg">
              .گروه صنعتی هانز محصولات آلومینیومی متنوعی در صنایع الکترونیک، پزشکی، لوازم خانگی و ابزارهای صنعتی با بهره مندی از خطوط متعدد تولیدی و قطعه سازی، آماده ی ارائه ی بهترین خدمات برای پاسخ به نیاز های متنوع مشتریان صنعتی است.
            </p>
          </div>
        </div>

        <Profile />
        <ProfileProperties />
        <Cratinwall />

      </div>

    </main>
  );
}
