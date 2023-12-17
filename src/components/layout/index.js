import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const windowC = () => {
  return window
}

const Layout = ({ children }) => {
  // const [toggle, setToggle] = useState(false)
  // const [windowSize, setWindowSize] = useState(() => windowC.innerWidth)
  // // useEffect(() => {
  //   console.log(windowC);
  // // })
  // useEffect(() => {
  //   const windowsizeHandler = (event) => {
  //     setWindowSize(windowC.innerWidth)
  //   }
  //   windowC.addEventListener("resize", windowsizeHandler)

  //   return () => windowC.removeEventListener("resize", windowsizeHandler)
  // }, [windowSize])

  // console.log(show);

  return (
    <>

      {/* {windowSize > 1024 ? (
        <Sidebar />

      ) : (
       <Sidebar show={show} setShow={setShow} /> 

      )}  */}


      {/* <Sidebar show={show} setShow={setShow} /> */}
      <div className="flex relative lg:mr-[15%]">

        <div className="w-full flex flex-col">
          {/* <Header toggle={toggle} setToggle={setToggle} /> */}

          <div className="flex-1 h-[500px]">{children}</div>

          <Footer />
        </div>
      </div>

    </>
  );
};

export default Layout;
