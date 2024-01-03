import Main from "@/components/globalComponents/Main";
import Image from "next/image"
import image1 from "../../../public/image/Shayco-Ghorfe-WEBSITE.jpg"

export default function ImageGallery() {
  return (
    <main className="flex flex-col">
      <Main title={'گالری تصاویر'} bg={'bg-gallerySection'} height={'h-[390px]'} display={'hidden'} />
      <section className="p-10">
        <div className="flex flex-wrap gap-16 p-5">
          <div className="flex flex-col items-center justify-between gap-5">
            <Image src={image1} alt={'hanz'} />
            <h3>تصاویر نمایشگاه</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <Image src={image1} alt={'hanz'} />
            <h3>تصاویر نمایشگاه</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <Image src={image1} alt={'hanz'} />
            <h3>تصاویر نمایشگاه</h3>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}
