import classes from "./footer.module.scss";
import { Mail, Map, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["content"]}>
        {/* products */}
        <div className={classes["overlay"]}>
          <div className={classes["overlay__products"]}>
            {/* заголовок */}
            <div className={classes["overlay__products_title"]}>
              <h1>PRODUCTS</h1>
            </div>

            {/* содержимое товаров */}
            <div className={classes["overlay__products_list"]}>
              <ul>
                <li>Salar Off Grid Inverter</li>
                <li>Salar Battery</li>
                <li>Salar Controller</li>
                <li>Salar Mounting Bracket</li>
                <li>Salar Cable</li>
              </ul>
            </div>
          </div>

          {/* Контакты */}
          <div className={classes["overlay__contacts"]}>
            {/* заголовок */}
            <div className={classes["overlay__contacts_title"]}>
              <h1>CONTACT</h1>
            </div>

            {/* содержимое товаров */}
            <div className={classes["overlay__contacts_list"]}>
              <ul>
                <li>
                  <Phone /> <span> +86 17821615616 </span>
                </li>
                <li>
                  <Mail /> <span> sales@pv-system.net </span>
                </li>
                <li>
                  <Map />

                  <span>
                    3rd floor,No 1559 East Zhuan Xing Road,Shanghai,China.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes["afterAll"]}>@All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
