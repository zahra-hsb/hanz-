import Image from "next/image"

const LangSection = ({ languages = [], changeLang }) => {



    return (
        <>
            <div className="absolute -top-40 left-0 w-full bg-white flex flex-col gap-5 items-center px-5 py-6 shadow-lg border-t">
                {languages.map(item => (
                    <>
                        <div type="radio" className="flex gap-3 items-center justify-start w-full" >
                            <Image src={item.src} id="flag" alt="farsi" className="" />
                            <p onClick={changeLang}  className="hover:text-gray-500 cursor-pointer">{item.title}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default LangSection