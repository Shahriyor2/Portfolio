import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
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
            <p>+992 900 000 000</p>
          </a>
        </div>

        {/* социальные сети */}
        <div className={classes["social"]}>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Instagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientInfo;
