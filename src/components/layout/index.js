import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full h-[100px] flex justify-center items-center">
        Header
      </header>
      <div className="w-full flex">
        <div className="flex-1 h-[500px]">{children}</div>
        <aside className="w-[200px] h-full">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">ABOUT</Link>
          </div>
        </aside>
      </div>
      <footer className="w-full h-[100px] flex justify-center items-center">
        footer
      </footer>
    </>
  );
};

export default Layout;
