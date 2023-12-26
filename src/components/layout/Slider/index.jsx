import Button from "../Main/button"

const Slider = () => {
    return (
        <>
            <section className="flex flex-col w-full p-2 lg:p-5">
                <div className="flex items-center justify-between p-3">
                    <div className="text-sm font-bold">
                        <h3>پروژه های انجام شده</h3>
                    </div>
                    <div>
                        <Button title={'درباره ما'} url={'/about'} border={'border-2 border-green'} color={'text-green text-sm'} />

                    </div>
                </div>
                <div className="p-2">
                    <span>2</span>
                    <span>2</span>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <div>2</div>
                        <div className="p-3">2</div>
                    </div>
                    <div>
                        <div>2</div>
                        <div className="p-3">2</div>
                    </div>
                    <div>
                        <div>2</div>
                        <div className="p-3">2</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider