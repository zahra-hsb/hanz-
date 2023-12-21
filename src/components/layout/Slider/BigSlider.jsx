import Image from 'next/image'
import Banner from '../../../../public/image/cuh_banner.png'

const BigSlider = () => {
    return (
        <section className='w-full relative'>
            <span className='absolute text-white font-bold text-3xl hover:bg-white hover:text-green hover:p-1 top-[45%] cursor-pointer'>→</span>
            <Image src={Banner} alt='' className='w-full' />
            <span className='absolute text-white font-bold text-3xl hover:bg-white hover:text-green hover:p-1 top-[45%] cursor-pointer left-0'>←</span>
        </section>
    )
}

export default BigSlider