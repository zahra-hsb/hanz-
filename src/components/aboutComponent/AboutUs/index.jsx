import Image from 'next/image'
import pic from '../../../../public/image/cover.jpg'
import pic2 from '../../../../public/image/about.jpg'
import Logo from '@/components/layout/Sidebar/utils-sidebar/Logo'

const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center sm:items-start gap-10 p-6">
                <div>
                    <div className='flex items-center justify-between'>
                        {/* <Logo /> */}
                        <h4 className="text-2xl opacity-[76%]">
                            گروه صنعتی
                            <span className="text-5xl text-green opacity-1"> هانز</span>
                        </h4>
                    </div>
                    <div>
                        <p className='sm:text-lg mt-5 text-justify opacity-70 leading-9 sm:leading-10'>
                            از معتبرترین شرکت های
                            طراحی و تولید کننده سیستم های نوین درب و پنجره و نمای ساختمان است که با
                            استفاده از دانش روز و تکنولوژی برتر در کشور از سال 1384 ، با ظرفیت اولیه
                            11000 تن در شهر تهران و در زمینی به مساحت 15000 متر مربع که بالغ بر 9000
                            متر مربع آن به سالن های تولیدی اختصاص دارد ، شروع به فعالیت نموده است.
                            این واحد تولیدی در راستای الویت قرار
                            دادن کیفیت در تولید محصولات موفق به دریافت گواهینامه ی ایزو 9008:9001 در مدیریت کیفیت شده است.
                        </p>

                    </div>
                </div>
                <div className='relative bottom-52 mt-60'>
                    <Image src={pic} alt='about hanz' className='h-[250px]' />
                    <Image src={pic2} alt='about pic' className='w-2/3 absolute top-56 left-[-15px] shadow-2xl'/>
                </div>
            </div>
        </>
    )
}
export default AboutUs