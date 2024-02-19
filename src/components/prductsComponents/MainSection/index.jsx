import GallerySlider from "@/components/imageGallery/GallerySlider";
import ProductCategory from "../ProductCategory";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'

// services
import ExtrusionImage from "../../../../public/image/line/aluminum-extrusion.jpg"
import WoodenImage from "../../../../public/image/presentationProducts/units/Untitled3.jpg"
import PowdercoatingImage from "../../../../public/image/presentationProducts/units/Untitled2.jpg"
import TERMALImage from "../../../../public/image/line/index.jpg"
import ASSEMBLINGImage from "../../../../public/image/presentationProducts/units/Untitled2.jpg"

// products
import slidingImg from "../../../../public/image/catalogue3d/profile-1.jpg"
import hingeImg from "../../../../public/image/catalogue3d/profile-2.jpg"

// accessory
import profile1 from '../../../../public/image/catalogue3d/profile-1.jpg'
import profileGh1 from '../../../../public/image/presentationProducts/profile-gh.jpg'
import curtainWall1 from '../../../../public/image/presentationProducts/curtain.jpg'


// none profile
import noneProfile from '../../../../public/image/catalogue3d/none-profile.jpg'
import ProfileShutterImage from "../../../../public/image/catalogue3d/shutter.png"
import ProfileSkyLightImage from "../../../../public/image/catalogue3d/skylight.png"
import ProfileHandRailImage from "../../../../public/image/catalogue3d/hand-rail.png"
import profile70HImage from "../../../../public/image/catalogue3d/70-h.png"

export default function MainSection() {
  const structuralArray = [
    { image: ProfileSkyLightImage, text: 'نما' },
    // { image: profile70HImage, text: 'پنجره' },
    { image: ProfileHandRailImage, text: 'جان پناه' },
    { image: ProfileShutterImage, text: 'شاتر' },
    { image: slidingImg, text: 'کشویی' },
    { image: hingeImg, text: 'لولایی' },
  ]
  const industrialArray = [
    { image: hanzProfile1 },
    { image: hanzProfile3 },
    { image: hanzProfile2 },
  ]
  const servicesArray = [
    { image: TERMALImage, text: 'واحد طراحی سیستم' },
    { image: ExtrusionImage, text: 'واحد اکستروژن' },
    { image: WoodenImage, text: 'واحد رنگ دکورال' },
    { image: PowdercoatingImage, text: 'واحد رنگ پودری الکترواستاتیک' },
    { image: TERMALImage, text: 'واحد ترمال بریک' },
    { image: ASSEMBLINGImage, text: 'واحد مونتاژ' },
    { image: PowdercoatingImage, text: 'واحد رنگ آنادیز' },
  ]
  const Accessories = [
    { image: profile1, text: 'پروفیل' },
    { image: profileGh1, text: 'متعلقات' },
    { image: curtainWall1, text: 'کرتین وال' },
  ]
  return (
    <>

      <div className="w-[90%] sm:w-[100%] m-auto">
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
      </div>

      <ProductCategory items={structuralArray} subCategory={'ساختمانی'} 
      text={'گروه صنعتی هانز با استفاده از تکنولوژی روز دنیا و به پشتیبانی تیم مهندسی مجرب، محصولات آلومینیومی متنوع تولید می کند.'} url={'building'}/>
      <ProductCategory items={industrialArray} subCategory={'صنعتی'} 
        text={'گروه صنعتی هانز محصولات آلومینیومی متنوعی در صنایع الکترونیک، پزشکی، لوازم خانگی و ابزارهای صنعتی، آماده ی ارائه ی بهترین خدمات برای پاسخ به نیاز های متنوع مشتریان صنعتی است.'} url={'industrial'}
      />
      <ProductCategory items={servicesArray}
      subCategory={'خدمات'}
      text={'گروه صنعتی هانز با ارائه ی خدمات متعدد در زمینه طراحی قالب، خدمات اکسترود، رنگ پودری، ترمال بریک و مونتاژو غیره با بهره مندی از دانش و دستگاه های به روز دنیا به مشتریان عزیز می پردازد.'} url={'services'} />
      <ProductCategory items={Accessories} 
      subCategory={'اکسسوری'}
      text={'گروه صنعتی هانز با ارائه مجموعه ی کاملی از اکسسوری و یراق آلات از جمله انواع گونیا، لاستیک، چسب، پیچ و خدمات فنی و پشتیبانی مشتریان خود را در زمینه ی تهیه ی اکسسوری بی نیاز می کند.'} url={'accessory'}
      />
    </>
  );
}