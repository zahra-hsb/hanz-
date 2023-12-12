import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
        <Sidebar />
      <div className="flex relative lg:mr-[15%]">

        <div className="w-full flex flex-col">
          <Header />

          <div className="flex-1 h-[500px]">{children}</div>

          <Footer />
        </div>
      </div>

    </>
  );
};

export default Layout;
