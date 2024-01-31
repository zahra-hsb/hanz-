import GallerySlider from "@/components/imageGallery/GallerySlider";
import ProductCategory from "../ProductCategory";
import hanzProfile1 from '../../../../public/image/hanz-profile1.webp'
import hanzProfile2 from '../../../../public/image/hanz-profile2.webp'
import hanzProfile3 from '../../../../public/image/hanz-profile3.webp'

export default function MainSection() {
  const structuralArray = [
    { image: hanzProfile1, text: 'نما' },
    { image: hanzProfile3, text: 'پنجره' },
    { image: hanzProfile2, text: 'جان پناه' },
    { image: hanzProfile3, text: 'شاتر' }
  ]
  const industrialArray = [
    { image: hanzProfile1, text: 'گلخانه' },
    { image: hanzProfile3, text: 'هیدسینگ' },
    { image: hanzProfile2, text: 'الکترونیک' },
  ]
  const servicesArray = [
    { image: hanzProfile1, text: 'واحد طراحی سیستم' },
    { image: hanzProfile3, text: 'واحد اکستروژن' },
    { image: hanzProfile2, text: 'واحد رنگ دکورال' },
    { image: hanzProfile2, text: 'واحد رنگ پودری الکترواستاتیک' },
    { image: hanzProfile2, text: 'واحد ترمال بریک' },
    { image: hanzProfile2, text: 'واحد مونتاژ' },
    { image: hanzProfile2, text: 'واحد رنگ آنادیز' },
  ]
  const Accessories = [
    { image: hanzProfile1, text: 'پروفیل' },
    { image: hanzProfile3, text: 'متعلقات' },
    { image: hanzProfile2, text: 'کراتین وال' },
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