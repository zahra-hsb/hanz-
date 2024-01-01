import Image from 'next/image'
import Logo from '../../../public/icons/logo2.svg'
export default function ABOUT() {
  return (
    <>
      <main className="flex justify-center items-center sm:p-12 py-10">
        <div className="flex flex-col justify-center items-center gap-10 p-6">
          <div>
            <Image src={Logo} alt='hanz' />
          </div>
          <div>
            <p className='sm:text-xl text-justify opacity-70 leading-9'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
              فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
