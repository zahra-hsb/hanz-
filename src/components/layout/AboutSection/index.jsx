import Image from "next/image"
import picture from '../../../../public/image/Shayco-Ghorfe.png'

const AboutSection = () => {
    return (
        <>
            <section className="flex flex-col pt-5 w-full">
                <div className="flex w-full items-center justify-between flex-wrap">
                    <div className="h-full">
                        <Image src={picture} alt="hanz" />
                    </div>
                    <div className="p-2">
                        <div>11</div>
                        <div>22</div>
                        <div>33</div>
                    </div>
                </div>
                <div className="w-1/2 p-5">
                    <div>a</div>
                    <div>b</div>
                </div>
                <div className="flex w-full items-center justify-around flex-wrap">
                    <div className="h-full">1111111111111</div>
                    <div className="p-2">
                        <div>212222222222</div>
                        <div>223333333333</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection