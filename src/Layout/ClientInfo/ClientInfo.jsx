import { Facebook, Instagram, Mail, Navigation, Phone } from "lucide-react";
import classes from "./clientinfo.module.scss";

const ClientInfo = () => {
  return (
    <section className={classes["clientinfo-container"]}>
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
          <a href="#">
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
    </section>
  );
};

export default ClientInfo;
