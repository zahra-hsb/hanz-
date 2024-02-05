import Main from "@/components/globalComponents/Main";
import aluminimDesign from "../../../../public/image/line/aluminim-design.jpg"
import ExtrusionImage from "../../../../public/image/line/aluminum-extrusion.jpg"
import WoodenImage from "../../../../public/image/line/Alluminium5.jpg"
import PowdercoatingImage from "../../../../public/image/line/powdercoating.jpg"
import TERMALImage from "../../../../public/image/line/index.jpg"
import ASSEMBLINGImage from "../../../../public/image/line/2022115113115655.jpg"
import ServicesCardComponent from "./ServicesCardComponent";

export default function Services() {

  const servicesData = [
    {
      title: <div>واحد طراحی سیستم <br />(SYSTEM DESIGN LINE)</div>,
      description: 'شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب و جوان کارآزموده با و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمان جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.',
      image: aluminimDesign,
    },
    {
      title: <div>واحد اکستروژن <br />(EXTRUSION LINE)</div>,
      description: 'شرکت هانز مجهز به یک دستگاه پرس 2500 تن اکستروژن با دبل پولر هوایی فول اتوماتیک از شرکت زیمنس آلمان و میز فول اتوماتیک انتقال پروفیل و قسمت استرج و دستگاه ایجینگ القایی با قابلیت سختکاری پروفیل با آلیاژ 6063 تا 14 وبستر سختی را داراست',
      image: ExtrusionImage,
    },
    {
      title: <div>واحد رنگ دکورال <br />(WOODEN POWDER COATING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل دکورال از شرکت migrolio ایتالیا امکان ارائه ی پروفیل های آلومینیومی با حس لمس چوب و با کیفیت بالا و طرح و رنگ های متنوع را داراست.',
      image: WoodenImage,
    },
    {
      title: <div>واحد رنگ پودری الکترواستاتیک <br />(POWDER COATING LINE)</div>,
      description: 'واحد رنگ پودری الکترواستاتیک شرکت هانز با بهذه گیری از خط رنگ آمیزی پودری شرکت ELFI ایتالیا به صورت فول رباتیک قابلیت ارائه خدمات رنگ برای پروفیل های با طول تا 14 متر و با ضخامت 80 میکرون را داراست که تنوع و کیفیت رنگ های ارائه شده می تواند زیباترین پروفیل ها را با توجه به انواع سلیقه و نظر مشتریان عزیز تامین کند.',
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
    {
      title: <div>واحد رنگ آنادایز <br />(ANODIZING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.',
      image: ExtrusionImage,
    },
    {
      title: <div>واحد رنگ آنادایز <br />(ANODIZING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.',
      image: PowdercoatingImage,
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'خدمات'} bg={'bg-servicesSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[90%] sm:w-[80%] m-auto">

        <div>

          <div className="mt-20 mb-10 text-gray-600 flex justify-center items-center">
            <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
            <div className="mx-8">
              <h4 className="text-xl opacity-[76%]">
                واحدهای تولید
                <span className="text-3xl text-green opacity-1">هانز</span>
              </h4>
            </div>
            <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
          </div>

          <div className="py-10 flex justify-around flex-wrap">
            {/* {servicesData.map((service, index) => (
              <div key={index} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-gray-100 mb-10">
                <div
                  className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={service.image}
                    alt="card-image" />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {service.title}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{service.description}</p>
                </div>
              </div>
            ))} */}
            <ServicesCardComponent servicesData={servicesData} />
          </div>
          {/* <div className="mb-10">
            <div className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow-inner md:flex-row md:max-w-xl hover:bg-gray-100">
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={service1Image} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-5 text-xl font-bold tracking-tight text-gray-700 opacity-[80%]">واحد رنگ آنادایز <br />(ANODIZING LINE)</h5>
                <div>
                  <p className="mb-3 text-sm text-gray-600 opacity-[76%]">شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.</p>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </main>
  );
}
