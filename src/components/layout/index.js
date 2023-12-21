import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import './layout.module.css';

const Layout = ({ children }) => {

  return (
    <>
      <Sidebar/>
      <div className="flex relative lg:w-[calc(100%-256px)] lg:mr-64">

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
