import Slider from "@/components/globalComponents/Slider"



const HanzUnits = () => {
    const sliderItems = [
        {image: '', title: 'واحد طراحی سیستم (SYSTEM DESIGN LINE)'},
        {image: '', title: 'واحد اکستروژن (EXTRUSION LINE)'},
        {image: '', title: 'واحد رنگ دکورال (WOODEN POWDER COATING LINE)'},
        {image: '', title: 'واحد رنگ پودری الکترواستاتیک (POWDER COATING LINE)'},
        {image: '', title: 'واحد ترمال بریک (TERMAL BREAKING LINE)'},
        {image: '', title: 'واحد مونتاژ (ASSEMBLING LINE)'},
        {image: '', title: 'واحد رنگ آنادایز (ANODIZING LINE)'},
    ]
    return (
        <>
            <section>
                <Slider 
                    url={'#'}
                    slidesPerView={4}
                />
            </section>
        </>
    )
}

export default HanzUnits