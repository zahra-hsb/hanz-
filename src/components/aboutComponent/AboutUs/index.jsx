import Image from 'next/image'
import Logo from '@/components/layout/Sidebar/utils-sidebar/Logo'

const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center sm:items-start gap-10 p-6">
                <div>
                    <Logo />
                </div>
                <div>
                    <p className='sm:text-lg text-justify opacity-70 leading-9 sm:leading-10'>
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
        </>
    )
}
export default AboutUs