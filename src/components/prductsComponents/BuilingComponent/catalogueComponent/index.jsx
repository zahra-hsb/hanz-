import CatalogueView from "../CatalogueView";
import CatalogueSliding from "../CatalogueSliding";
import CatalogueHinge from "../CatalogueHinge";



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
        </>
    );
}

export default CatalogueComponent;
