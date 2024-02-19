import Form from "@/components/contactUsComponents/Form";
import InformationContact from "@/components/contactUsComponents/InformationContact";
import GoogleMapComponent from "@/components/googleMapComponent";

export default function ContactUs() {
  return (
    <main className="flex flex-col justify-start mt-[30%] sm:mt-[6%] w-[90%] m-auto sm:w-[80%] lg:w-[70%]">
      <div className="text-center text-4xl mb-[8%] lg:mb-[10%]">
        <h2 className="text-gray-600">با ما در تماس باشید</h2>
      </div>
      <div className="text-gray-600 text-center sm:text-start pl-4 mb-3 sm:mb-20 mt-8 sm:mt-0 sm:w-[70%]">
        <p className="text-gray-600 mb-3 ">
          سوالی دارید؟
          <br />
          ما برای کمک اینجا هستیم!
        </p>
        <p>برای تماس با ما می توانید از طریق تلفن، ایمیل یا فرم زیر اقدام کنید.همچنین حضورا به محل شرکت مراجعه کنید.
          تیم پاسخگویی هانز تمام قد برای جوابگویی آماده است.
        </p>
      </div>
      <div className="sm:flex justify-between items-center flex-wrap">

        <div className="sm:basis-[50%] pl-4 flex flex-col justify-between text-center sm:text-start mb-40 sm:mb-0">
          <InformationContact />
        </div>

        <div className="sm:basis-[50%] mb-20">
          <Form />
        </div>
      </div>
      <div className="bg-gray-200 my-10 h-[300px]">
        <GoogleMapComponent />
      </div>
    </main>
  );
}
