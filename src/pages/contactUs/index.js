import Form from "@/components/contactUsComponents/Form";
import InformationContact from "@/components/contactUsComponents/InformationContact";
import GoogleMapComponent from "@/components/googleMapComponent/index";

export default function ContactUs() {
  return (
    <main className="flex flex-col justify-start mt-[17%] sm:mt-[10%] w-[90%] m-auto sm:w-[80%] lg:w-[70%]">
      <div className="text-center text-4xl mb-[8%] lg:mb-[10%]">
        <h2 className="text-gray-600">با ما در تماس باشید</h2>
      </div>
      <div className="sm:flex justify-between items-center flex-wrap">

        <div className="sm:basis-[50%] pl-4 flex flex-col justify-between text-center sm:text-start mb-40 sm:mb-0">
          <InformationContact />
        </div>

        <div className="sm:basis-[50%] mb-20 sm:mb-0">
          <Form />
        </div>
      </div>
      <div className="bg-red-300 my-10">
          <GoogleMapComponent />
        </div>
    </main>
  );
}
