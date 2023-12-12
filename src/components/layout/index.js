import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>

      <div className="flex">

        <aside className="w-[200px] basis-[15%] h-full">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">ABOUT</Link>
          </div>
        </aside>


        <div className="w-full flex flex-col">

          <header className="w-full h-[100px] flex justify-center items-center">
            Header
          </header>

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
