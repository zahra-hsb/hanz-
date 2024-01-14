import Main from "@/components/globalComponents/Main";
import PicturesGallery from "@/components/imageGallery/PicturesCategory";



export default function ImageGallery() {
  return (
    <main className="flex flex-col">
      <Main title={'گالری تصاویر'} bg={'bg-gallerySection'} height={'h-[390px]'} display={'hidden'} />
      <PicturesGallery />

    </main>
  );
}
