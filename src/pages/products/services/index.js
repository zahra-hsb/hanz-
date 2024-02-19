import Main from "@/components/globalComponents/Main";
import aluminimDesign from "../../../../public/image/line/aluminim-design.jpg"
import ExtrusionImage from "../../../../public/image/line/aluminum-extrusion.jpg"
// import WoodenImage from "../../../../public/image/line/Alluminium5.jpg"
import PowdercoatingImage from "../../../../public/image/line/powdercoating.jpg"
import TERMALImage from "../../../../public/image/line/index.jpg"
import ASSEMBLINGImage from "../../../../public/image/line/2022115113115655.jpg"
import ServicesCardComponent from "../../../components/ServicesCardComponent";

export default function Services() {

  const servicesData = [
    {
      title: <div>واحد طراحی سیستم <br />(SYSTEM DESIGN LINE)</div>,
      description: 'شرکت هانز افتخار دارد که به بهره مندی از تیم فنی مهندسی مجرب، بهترین و مدرن ترین سیستم های آلومینیومی پنجره و نما را برای سلیقه ای مختلف معماری،  طراحی و تولید نموده است.',
      image: aluminimDesign,
    },
    {
      title: <div>واحد اکستروژن <br />(EXTRUSION LINE)</div>,
      description: 'شرکت هانز مجهز به خط تولید پرس اکستروژن 2500 تن با دبل پولر هوایی تمام اتوماتیک شرکت زیمنش آلمان و میز فول اتوماتیک انتقال پروفیل که مجهز به دستگاه استرج و دستگاه ایجنت القایی با قابلیت سختیگری پروفیل با آلیاژ 6063 تا 14 وبستر سختی را داراست.',
      image: ExtrusionImage,
    },
    {
      title: <div>واحد رنگ پودری الکترواستاتیک <br />(POWDER COATING LINE)</div>,
      description: 'واحد رنگ پودری شرکت هانز با بهره گیری از خط رنگ پودری شرکت ELFI ایتالیا به صورت  فول رباتیک قابلیت ارائه ی خدمات رنگ برای پروفیل های با طول 14 متر و با ضخامت 80 میکرون را داراست که تنوع و کیفیت رنگ های ارائه شده می تواند زیباترین پروفیل ها را با توجه به نظر و سلیقه ی مشتریان عزیز تامین می کند.',
      image: PowdercoatingImage,
    },
    {
      title: <div>واحد ترمال بریک <br />(TERMAL BREAKING LINE)</div>,
      description: 'این واحد از شرکت هانز با استفاده از خط تخصصی ترمال بریک که دسنگاه آن از فناوری روز دنیا و از برند برتر سوئیسی Herman Muller تامین شده است، آماده ارائه خدمات ترمال بریک با نکنیک کنگره زنی منحصر به فرد و مونتاژ نمودن تیفه های پلی آمیدی با کیفیت بالا می باشد.',
      image: TERMALImage,
    },
    {
      title: <div>واحد مونتاژ <br />(ASSEMBLING LINE)</div>,
      description: 'در این بخش از شرکت با بهره گیری از نیروهای کارآزموده، دقیق و جوان با کمک خط تولید شرکت FOUM ایتالیا افدام به تولید پنجره و انواع نماهای نوین ساختمانی با بالاترین استاندارد و کیفیت روز در جهت جلب نظر هرچه بیشتر مشتریان عزیز می نماییم.',
      image: ASSEMBLINGImage,
    },
    // {
    //   title: <div>واحد رنگ آنادایز <br />(ANODIZING LINE)</div>,
    //   description: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.',
    //   image: ExtrusionImage,
    // },
  ];

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'خدمات'} bg={'bg-servicesSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[90%] sm:w-[80%] m-auto">

        <div>
          <div>
            <div className="mt-20 mb-10 text-gray-600 flex justify-center items-center">
              <div className="hidden md:flex border-b border-gray-200 w-full"></div>
              <div className="mx-6 w-full text-center">
                <h4 className="text-xl opacity-[76%]">
                  واحدهای تولید
                  <span className="text-3xl text-green opacity-1">هانز</span>
                </h4>
              </div>
              <div className="hidden md:flex border-b border-gray-200 w-full"></div>
            </div>
            <div className="w-full text-center">
              <p className="p-4 sm:px-10 text-gray-600 opacity-[76%] text-lg">
                گروه صنعتی هانز با ارائه ی خدمات متعدد در زمینه طراحی قالب، خدمات اکسترود، رنگ پودری، ترمال بریک و مونتاژو غیره با بهره مندی از دانش و دستگاه های به روز دنیا به مشتریان عزیز می پردازد.
              </p>
            </div>
          </div>

          <div className="py-10 flex justify-around flex-wrap">
            <ServicesCardComponent servicesData={servicesData} />
          </div>
        </div>

      </div>
    </main>
  );
}
