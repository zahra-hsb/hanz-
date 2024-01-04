import Main from "@/components/globalComponents/Main";
import GalleryModal from "@/components/imageGallery/GalleryModal";
import PicturesGallery from "@/components/imageGallery/PicturesCategory";



export default function ImageGallery() {
  return (
    <main className="flex flex-col">
      <Main title={'گالری تصاویر'} bg={'bg-aboutSection'} height={'h-[390px]'} display={'hidden'} />
      <PicturesGallery />
      <GalleryModal/>

    </main>
  );
}
