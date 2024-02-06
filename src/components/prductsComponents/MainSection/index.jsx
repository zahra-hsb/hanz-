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

export default function MainSection() {
  const structuralArray = [
    { image: noneProfile, text: 'نما' },
    { image: noneProfile, text: 'پنجره' },
    { image: noneProfile, text: 'جان پناه' },
    { image: noneProfile, text: 'شاتر' },
    { image: slidingImg, text: 'کشویی' },
    { image: hingeImg, text: 'لولایی' },
  ]
  const industrialArray = [
    { image: hanzProfile1, text: 'گلخانه' },
    { image: hanzProfile3, text: 'هیدسینگ' },
    { image: hanzProfile2, text: 'الکترونیک' },
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
      text={'در شرکت ما تجهیزات ساختمانی باکیفیت ساخته می شود.'} url={'building'}/>
      <ProductCategory items={industrialArray} subCategory={'صنعتی'} 
        text={'تجهیزات صنعتی هانز را در زیر می توانید ببینید'} url={'industrial'}
      />
      <ProductCategory items={servicesArray}
      subCategory={'خدمات'}
      text={'شرکت هانز به کمک 7 واحد افتخار خدمت رسانی به شما عزیزان را دارد'} url={'services'} />
      <ProductCategory items={Accessories} 
      subCategory={'اکسسوری'}
      text={'اکسسوری های هانز به سه دسته زیر تقسیم بندی می شوند.'} url={'accessory'}
      />
    </>
  );
}