import CatalogueHinge from "../CatalogueHinge";
import CatalogueSliding from "../CatalogueSliding";



const CatalogueComponent = () => {

    return (
        <>
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
