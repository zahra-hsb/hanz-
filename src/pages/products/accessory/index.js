import Main from "@/components/globalComponents/Main";
import Cratinwall from "@/components/prductsComponents/Cratinwall";
import Profile from "@/components/prductsComponents/Profile";
import ProfileProperties from "@/components/prductsComponents/ProfileProperties";

export default function Accessory() {
  return (
    <main className="flex flex-col justify-center items-center pb-[50px]">
      <Main title={'اکسسوری'} bg={'bg-profileSection'} height={'h-[390px]'} display={'hidden'} />
      <div className="w-[100%] sm:w-[90%] m-auto">

        <Profile />
        <ProfileProperties />
        <Cratinwall />

      </div>

    </main>
  );
}
