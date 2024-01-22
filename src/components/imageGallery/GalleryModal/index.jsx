import React, { useState } from "react";
import Image from "next/image";
import GallerySlider from "../GallerySlider";

const GalleryModal = ({ mainPic, closeModal, opacity, wrapperOpacity, galleryProp }) => {
  const [picture, setPicture] = useState(mainPic);

  const changePic = (img) => {
    setPicture(img);
  };

  return (
    <>
      <div
        className={`${wrapperOpacity} fixed top-0 left-0 z-40 w-full h-full backdrop-blur-md transition duration-500 ease-in-out`}
        onClick={closeModal}
      ></div>
      <span
        className="w-[15px] fixed top-0 right-0 z-50 p-5 sm:p-10 lg:p-10 text-4xl text-gray-600 cursor-pointer hover:text-red"
        onClick={closeModal}
      >
        <span className="rotate-45 flex hover:text-red">+</span>
      </span>
      <section
        className={`${opacity} backdrop-blur-3xl rounded-md overflow-hidden transition duration-500 ease-in-out fixed sm:top-[50%] top-[10%] sm:left-[50%] lg:p-10 sm:ml-[-40vw] sm:mt-[-45vh] w-[90%] sm:w-[80vw] sm:h-[90vh]`}
      >
        <div className="flex items-center justify-center">
          {picture && (
            <Image
              src={picture}
              alt=""
              width={400}
              className="w-full lg:w-[45%] left-0 inner drop-shadow-lg cursor-zoom-in sm:h-[60vh] lg:h-full lg:rounded"
            />
          )}
        </div>
        <div className="py-8 sm:py-5 lg:p-10">
          <GallerySlider galleryProp={galleryProp} changePic={changePic} />
        </div>
      </section>
    </>
  );
};

export default GalleryModal;
