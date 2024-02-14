import CatalogueView from "../CatalogueView";
import CatalogueSliding from "../CatalogueSliding";
import CatalogueHinge from "../CatalogueHinge";
import CatalogueShelter from "../CatalogueShelter";
import CatalogueShutter from "../CatalogueShutter";



const CatalogueComponent = () => {

    return (
        <>
            <div>
                <div className="mt-20 mb-10 text-gray-600">
                    <div>
                        <h4 className="text-2xl opacity-[76%]">
                            محصولات
                            <span className="text-4xl text-green opacity-1"> ساختمانی</span>
                        </h4>
                    </div>
                </div>
                <div>
                    <p className="lg:w-5/6 text-justify text-gray-600 text-lg">
                        گروه صنعتی هانز با استفاده از تکنولوژی روز دنیا و به پشتیبانی تیم مهندسی مجرب، محصولات آلومینیومی متنوع تولید می کند.این محصولات متناسبی به نیاز مشتریان برای بهینه سازی مصرف انرژی و ارتقا سطح کیفی صنعت ساختمان طراح و تولید شده است.
                    </p>
                </div>
            </div>

            <div id="sliding">
                <CatalogueSliding />
            </div>

            <div id="Hinge">
                <CatalogueHinge />
            </div>

            <div id="shelter">
                <CatalogueShelter />
            </div>

            <div id="view">
                <CatalogueView />
            </div>

            <div id="shutter">
                <CatalogueShutter />
            </div>
        </>
    );
}

export default CatalogueComponent;
