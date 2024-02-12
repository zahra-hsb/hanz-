import CatalogueView from "../CatalogueView";
import CatalogueSliding from "../CatalogueSliding";
import CatalogueHinge from "../CatalogueHinge";
import CatalogueShelter from "../CatalogueShelter";
import CatalogueShutter from "../CatalogueShutter";



const CatalogueComponent = () => {

    return (
        <>
            <div id="view">
                <CatalogueView />
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
            
            <div id="shutter">
                <CatalogueShutter />
            </div>
        </>
    );
}

export default CatalogueComponent;
