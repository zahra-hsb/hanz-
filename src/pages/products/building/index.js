import Main from "@/components/globalComponents/Main";
import Image from "next/image";
import service1Image from "../../../../public/image/service-1.jpg"
import { useState } from "react";

export default function Builing() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 2;


  const servicesData = [
    {
      title: <div>واحد طراحی سیستم <br />(SYSTEM DESIGN LINE)</div>,
      description: 'شرکت هانز افتخار دارد در این واحد به کمک مهندسین مجرب و جوان کارآزموده با و با تکیه بر بررسی نیازهای بازار اقدام به طراحی و ساخت سیستم های مدرن و نوین در بخش صنعت ساختمان به خصوص نماهای مدرن و نوین ساختمان جهت پاسخگویی به انواع سلیقه های مشتریان و معماران عزیز می نماید.',
      image: service1Image,
    },
    {
      title: <div>واحد اکستروژن <br />(EXTRUSION LINE)</div>,
      description: 'شرکت هانز مجهز به یک دستگاه پرس 2500 تن اکستروژن با دبل پولر هوایی فول اتوماتیک از شرکت زیمنس آلمان و میز فول اتوماتیک انتقال پروفیل و قسمت استرج و دستگاه ایجینگ القایی با قابلیت سختکاری پروفیل با آلیاژ 6063 تا 14 وبستر سختی را داراست',
      image: service1Image,
    },
    {
      title: <div>واحد رنگ دکورال <br />(WOODEN POWDER COATING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل دکورال از شرکت migrolio ایتالیا امکان ارائه ی پروفیل های آلومینیومی با حس لمس چوب و با کیفیت بالا و طرح و رنگ های متنوع را داراست.',
      image: service1Image,
    },
    {
      title: <div>واحد رنگ پودری الکترواستاتیک <br />(POWDER COATING LINE)</div>,
      description: 'واحد رنگ پودری الکترواستاتیک شرکت هانز با بهذه گیری از خط رنگ آمیزی پودری شرکت ELFI ایتالیا به صورت فول رباتیک قابلیت ارائه خدمات رنگ برای پروفیل های با طول تا 14 متر و با ضخامت 80 میکرون را داراست که تنوع و کیفیت رنگ های ارائه شده می تواند زیباترین پروفیل ها را با توجه به انواع سلیقه و نظر مشتریان عزیز تامین کند.',
      image: service1Image,
    },
    {
      title: <div>واحد ترمال بریک <br />(TERMAL BREAKING LINE)</div>,
      description: 'این واحد از شرکت هانز با استفاده از خط تخصصی ترمال بریک که دسنگاه آن از فناوری روز دنیا و از برند برتر سوئیسی Herman Muller تامین شده است، آماده ارائه خدمات ترمال بریک با نکنیک کنگره زنی منحصر به فرد و مونتاژ نمودن تیفه های پلی آمیدی با کیفیت بالا می باشد.',
      image: service1Image,
    },
    {
      title: <div>واحد مونتاژ <br />(ASSEMBLING LINE)</div>,
      description: 'در این بخش از شرکت با بهره گیری از نیروهای کارآزموده، دقیق و جوان با کمک خط تولید شرکت FOUM ایتالیا افدام به تولید پنجره و انواع نماهای نوین ساختمانی با بالاترین استاندارد و کیفیت روز در جهت جلب نظر هرچه بیشتر مشتریان عزیز می نماییم.',
      image: service1Image,
    },
    {
      title: <div>واحد رنگ آنادایز <br />(ANODIZING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.',
      image: service1Image,
    },
    {
      title: <div>واحد رنگ آنادایز <br />(ANODIZING LINE)</div>,
      description: 'شرکت هانز با دارا بودن خط کامل آنادایزینگ همچنین دستگاه های پولیش و براش، تکمیل کننده سلایف مختلف مشتریان عزیز خواهد بود.',
      image: service1Image,
    },
  ];

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleServices = servicesData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'ساختمانی'} bg={'bg-BuilingSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <div>

          <div className="mt-20 mb-10 text-gray-600 flex justify-center items-center">
            <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
            <div className="mx-8 flex items-center">
              <h4 className="text-xl opacity-[76%]">
                کاتالوگ های شکرت
              </h4>
              <span className="text-3xl text-green opacity-1 mr-1">هانز</span>
            </div>
            <div className="hidden md:flex border-b border-gray-200 w-1/3"></div>
          </div>

          <div className="py-10 flex justify-around flex-wrap">
            {visibleServices.map((service, index) => (
              <div key={index} className="mb-10">
                <div className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow-inner md:flex-row md:max-w-xl hover:bg-gray-100">
                  <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={service.image} alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-5 text-xl font-bold tracking-tight text-gray-700 opacity-[80%]">{service.title}</h5>
                    <div>
                      <p className="mb-3 text-sm text-gray-600 opacity-[76%]">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>


        <div className="flex justify-center mt-10">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <p onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Previous</span>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                </p>
              </li>
              {pages.map((page) => (
                <li key={page}>
                  <p onClick={() => handlePageChange(page)} className={`${currentPage === 1 ? 'disabled' : ''} cursor-pointer flex items-center justify-center px-3 h-8 leading-tight ${currentPage === page ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}>{page}</p>
                </li>
              ))}
              <li>
                <p onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Next</span>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                  </svg>
                </p>
              </li>
            </ul>
          </nav>
        </div>

      </div> 

    </main>
  );
}
