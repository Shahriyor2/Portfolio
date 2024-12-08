import { Facebook, Instagram, Mail, Navigation, Phone } from "lucide-react";
import classes from "./clientinfo.module.scss";
import { Link } from "react-router-dom";

const ClientInfo = () => {
  return (
    <section className={classes["clientinfo-container"]}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
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
        <Link to="/adPan" style={{ opacity: 0 }}>
          test
        </Link>
      </div>
    </section>
  );
};

export default ClientInfo;
