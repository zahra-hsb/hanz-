import Button from "../Main/button"
import BigSlider from "../Slider/BigSlider"

const Company = () => {
    return (
        <>
            <section className="flex flex-col w-full">
                <div className="flex items-center justify-between p-10">
                    <div>
                        <h3 className="text-2xl font-bold">
                            گروه صنعتی هانز
                        </h3>
                    </div>
                    <div>
                            <Button url={'/about'} title={'درباره ما'}/>
                    </div>
                </div>
                <div>
                    <BigSlider />
                </div>
            </section>
            <section className="flex w-full items-center justify-around flex-wrap p-3">
                <div className="h-full">wwwwwwwww</div>
                <div className="p-2">
                    <div>11</div>
                    <div>22</div>
                    <div>33</div>
                </div>
            </section>
        </>
    )
}

export default Company