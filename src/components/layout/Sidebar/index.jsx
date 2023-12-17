import hanzIcon from '../../../../public/icons/hanz-icon.svg'
import Image from 'next/image'
const Sidebar = () => {
    // console.log(show);
    return (
        <>
            {/* <div className={`${show && "hidden"} fixed w-full h-full`} onClick={() => setShow(!show)}> */}
            {/* <aside className={`${show && "hidden"} lg:flex flex-col justify-between w-[100%] lg:w-[15%] h-[100vh] fixed bg-white z-10`}> */}
            <aside className="hidden lg:flex flex-col justify-between w-[100%] lg:w-[15%] h-[100vh] fixed bg-white z-10">
                {/* <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">ABOUT</Link>
          </div> */}
                <div>
                    <div className="flex justify-center">
                        <Image src={hanzIcon} alt="#" />
                    </div>
                    <div className="flex">
                        <div className="basis-[50%]">21</div>
                        <div className="basis-[50%]">22</div>
                    </div>
                    <div className="">
                        <div>خانه</div>
                        <div>معرفی محصول</div>
                        <div>گالری تصاویر</div>
                        <div>درباره ما</div>
                        <div>تماس با ما</div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>41</div>
                        <div>42</div>
                        <div>43</div>
                        <div>44</div>
                    </div>
                    <div className="flex text-center bg-green h-[64px] text-lg text-white">
                        {/* <div className="basis-[50%]">51</div> */}
                        <div className="flex items-center justify-center basis-[100%]">
                            <p>ورود / ثبت نام</p>
                        </div>
                    </div>
                </div>
            </aside>
            {/* </div> */}
        </>
    )
}

export default Sidebar;