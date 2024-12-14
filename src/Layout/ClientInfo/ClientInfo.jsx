import {
  Facebook,
  Instagram,
  Mail,
  Navigation,
  Phone,
  User,
} from "lucide-react";
import classes from "./clientinfo.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalAuth from "../Auth";

const ClientInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <section className={classes["clientinfo-container"]}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          flexDirection: "column",
        }}
      >
        <div className={classes["content"]}>
          {/* почта  */}
          <div className={classes["email"]}>
            <a href="#">
              <Mail />
              <p>sales@pv-system.net</p>
            </a>
          </div>

          {/* номер телефона */}
          <div className={classes["phone"]}>
            <a href="tel:+992 90 000 0596">
              <Phone />
              <p>+992 90 000 0596</p>
            </a>
          </div>

          {/* социальные сети */}
          <div className={classes["social"]}>
            <a href="#">
              <Facebook />
            </a>
            <a href="https://t.me/Muhammad_Kurbonov" target="_blank">
              <Navigation />
            </a>
            <a
              href="https://www.instagram.com/solar_system.tj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
        {/* <Link to="/adPan"> */}
        <div className={classes["auth"]} onClick={() => setIsOpen(true)}>
          <User />
          Вход
        </div>
        {/* </Link> */}
      </div>

      {modalIsOpen && (
        <ModalAuth modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      )}
    </section>
  );
};

export default ClientInfo;
