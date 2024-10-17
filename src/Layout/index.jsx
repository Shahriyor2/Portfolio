import { Outlet } from "react-router-dom";
import ClientInfo from "./ClientInfo/ClientInfo";
import Footer from "./Footer/Footer";
import ToUppButton from "./ToUppButton/ToUppButton";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <ToUppButton />
      <ClientInfo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
