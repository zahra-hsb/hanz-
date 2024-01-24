import Form from "@/components/contactUsComponents/Form";
import InformationContact from "@/components/contactUsComponents/InformationContact";

export default function ContactUs() {
  return (
    <main className="flex flex-col justify-start mt-[100px] w-[90%] lg:h-[100vh] m-auto sm:w-[85%] sm:mb-20">
      <div className="text-center my-[40px] lg:my-[70px] text-4xl">
        <h2 className="text-gray-600">با ما در تماس باشید</h2>
      </div>
      <div className="sm:flex justify-between items-start flex-wrap">

        <div className="sm:basis-[50%] pl-4 flex flex-col justify-between text-center sm:text-start mb-20 sm:mb-0">
          <InformationContact />
        </div>

        <div className="sm:basis-[50%] mb-20 sm:mb-0">
          <Form />
        </div>

      </div>
    </main>
  );
}
