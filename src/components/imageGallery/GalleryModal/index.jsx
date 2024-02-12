import React, { useState } from "react";
import Image from "next/image";
import GallerySlider from "../GallerySlider";

const GalleryModal = ({ mainPic, closeModal, opacity, wrapperOpacity, galleryProp, pictureCount = [] }) => {
  const [picture, setPicture] = useState(mainPic);
  const [isZoom, setZoom] = useState(false)
  
  const handleMouseMove = () => {
    setZoom(true)
  }
  const handleMouseLeave = () => {
    setZoom(false)
  }
  const changePic = (img) => {
    setPicture(img);
  };

  return (
    <>
      <div
        className={`${wrapperOpacity} fixed top-0 left-0 z-40 w-full h-full backdrop-blur-md lg:opacity-0 transition duration-500 ease-in-out`}
        onClick={closeModal}
      ></div>
      <span
        className="w-[15px] fixed top-0 right-0 z-50 p-5 sm:p-10 lg:p-10 text-4xl text-gray-600 cursor-pointer hover:text-red"
        onClick={closeModal}
      >
        <span className="rotate-45 flex hover:text-red">+</span>
      </span>
      <section
        className={`${opacity} flex flex-col justify-between backdrop-blur-3xl rounded-md overflow-hidden transition duration-500 ease-in-out fixed sm:top-[50%] top-[10%] sm:left-[50%] sm:p-10 sm:ml-[-40vw] sm:mt-[-45vh] w-[90%] sm:w-[80vw] sm:h-[90vh]`}
      >
        <div className="flex items-center justify-center overflow-hidden">
          {picture && (
            <Image
              src={picture}
              alt=""
              width={400}
              onClick={() => setZoom(z => !z)}
              onMouseLeave={handleMouseLeave}
              className={`${isZoom && `scale-150 z-50 cursor-zoom-out`} transform scale-100 transition-all duration-300 w-full sm:w-[50%] lg:w-[45%] left-0 inner drop-shadow-lg cursor-zoom-in lg:h-full lg:rounded`}
            />
          )}
        </div>
        <div className="pb-8 sm:pb-2 lg:p-1">
          <p className="text-start p-5 text-gray-900">
            <span className="text-gray-600 text-shadow-lg">تعداد تصاویر: </span>
            {pictureCount}&#160; 
             مورد 
          </p>
          <GallerySlider galleryProp={galleryProp} changePic={changePic} />
        </div>
        <div>

        </div>
      </section>
    </>
  );
};

export default GalleryModal;
