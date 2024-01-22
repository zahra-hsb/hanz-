import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import './layout.module.css';
import { Suspense, useState } from "react";
import MenuHamber from "./Sidebar/menuHamber";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(false);

  const router = useRouter();

  return (
    <>
        {sidebarShow ? (
          <MenuHamber setSidebarShow={setSidebarShow} router={router} />
        ) : (<Sidebar setSidebarShow={setSidebarShow} router={router} />)}

        {/* <Sidebar /> */}

        <div className="flex relative lg:w-[calc(100%-256px)] lg:mr-64">

          <div className="w-full flex flex-col">
            <Header setSidebarShow={setSidebarShow} router={router} />

            <div className="flex-1 h-[500px]">{children}</div>

            <Footer />
          </div>
        </div>
    </>
  );
};

export default Layout;
