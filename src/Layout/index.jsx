import { Outlet } from "react-router-dom";
import FooterBs from "../containers/FooterBussiness/FoterBs";
import ClientInfo from "./ClientInfo/ClientInfo";
import Navbar from "./Navbar/Navbar";
import ToUppButton from "./ToUppButton/ToUppButton";

const Layout = () => {
  return (
    <>
      <ToUppButton />
      <ClientInfo />
      <Navbar />
      <Outlet />
      <FooterBs />
    </>
  );
};

export default Layout;
