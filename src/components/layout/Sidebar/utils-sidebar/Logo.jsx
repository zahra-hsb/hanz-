import hanzIcon from '../../../../../public/icons/hanz-logo.png'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="flex justify-start pt-4 pr-6">
            <div className='w-[150px] pt-5'>
                <Image src={hanzIcon} alt="#" />
            </div>
        </div>
    )
}

export default Logo;