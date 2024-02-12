import CatalogueView from "../CatalogueView";
import CatalogueSliding from "../CatalogueSliding";
import CatalogueHinge from "../CatalogueHinge";
import CatalogueShelter from "../CatalogueShelter";



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
            
        </>
    );
}

export default CatalogueComponent;
