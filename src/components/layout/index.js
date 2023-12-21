import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import './layout.module.css';
import { useState } from "react";
import MenuHamber from "./Sidebar/menuHamber";

const Layout = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(false);


  return (
    <>

      {sidebarShow ? (
        <MenuHamber setSidebarShow={setSidebarShow} />
      ) : (<Sidebar />)}

      <Sidebar />

      <div className="flex relative lg:w-[calc(100%-256px)] lg:mr-64">

        <div className="w-full flex flex-col">
          <Header setSidebarShow={setSidebarShow} />

          <div className="flex-1 h-[500px]">{children}</div>

          <Footer />
        </div>
      </div>

    </>
  );
};

export default Layout;
