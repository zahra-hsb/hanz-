import Image from "next/image"
import Link from "next/link"

const CatalogueCardComponent = ({ receivedData }) => {
    return (
        <>
            {receivedData && receivedData.map((data, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-inner mb-10">
                    <div>
                        <Image className="rounded-t-lg" src={data.image} alt="" />
                    </div>
                    <div className="p-5 flex justify-between items-center">
                        <h5 className="text-xl tracking-tight text-gray-800 opacity-[76%] basis-[58%]">{data.title}</h5>
                        <Link href={data.link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green rounded-lg hover:opacity-[80%] outline-none">
                            نمایش کاتالوگ
                            <svg className="rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CatalogueCardComponent