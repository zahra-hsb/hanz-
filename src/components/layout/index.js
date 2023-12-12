import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>

      <div className="flex">

        <Sidebar />


        <div className="w-full flex flex-col">

          <Header />

          <div className="flex-1 h-[500px]">{children}</div>

          <footer className="w-full h-[100px] flex justify-center items-center">
            footer
          </footer>

        </div>

      </div>

    </>
  );
};

export default Layout;
