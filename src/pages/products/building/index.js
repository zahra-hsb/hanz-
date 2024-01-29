import Main from "@/components/globalComponents/Main";
import CatalogueComponent from "../../../components/prductsComponents/BuilingComponent/catalogueComponent/index"

export default function Builing() {

  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'ساختمانی'} bg={'bg-BuilingSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <CatalogueComponent />

      </div> 

    </main>
  );
}
