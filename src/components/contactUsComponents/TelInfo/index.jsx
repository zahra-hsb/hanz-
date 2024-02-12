import Link from "next/link"

const TelInfo = () => {
    return (
        <>
            <strong className="text-green">شماره تماس :</strong>
            <p className="text-gray-600 text-justify ">
                <Link href={'tel:02165626443'} className='hover:text-green cursor-pointer'> 021-65626443 </Link>
                -
                <Link href={'tel:02165626449'} className='hover:text-green cursor-pointer'> 021-65626449 </Link>
                <br />
                <Link href={'tel:02165626446'} className='hover:text-green cursor-pointer'> 021-65626446 </Link>
                -
                <Link href={'tel:02165626448'} className='hover:text-green cursor-pointer'> 021-65626448 </Link>
            </p>
        </>
    )
}

export default TelInfo