import Form from "@/components/contactUsComponents/Form";
import InformationContact from "@/components/contactUsComponents/InformationContact";

export default function ContactUs() {
  return (
    <main className="flex flex-col justify-start mt-[100px] w-[90%] sm:h-[100vh] m-auto sm:w-[80%] lg:w-[70%]">
      <div className="text-center my-[50px] lg:my-[80px] text-4xl">
        <h2 className="text-gray-600">با ما در تماس باشید</h2>
      </div>
      <div className="sm:flex justify-between items-center flex-wrap">

        <div className="sm:basis-[50%] pl-4 flex flex-col justify-between h-[440px] mb-20">
          <InformationContact />
        </div>

        <div className="sm:basis-[50%] mb-20">
          <Form />
        </div>

      </div>
    </main>
  );
}
