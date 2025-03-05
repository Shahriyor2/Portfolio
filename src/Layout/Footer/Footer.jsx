import { Mail, Map, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import classes from "./footer.module.scss";

const Footer = ({ categoriesData }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category_id=${categoryId}`);
  };

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
                {categoriesData?.map((item) => {
                  return (
                    <li
                      onClick={() => handleCategoryClick(item?.id)}
                      style={{ cursor: "pointer" }}
                      key={item?.id}
                    >
                      {item.name}
                    </li>
                  );
                })}
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
                <a href="tel:+992 90 000 0596">
                  <li>
                    <Phone /> <span> +992 90 000 0596 </span>
                  </li>
                </a>
                <a href="mailto:bilol-01@mail.ru">
                  <li>
                    <Mail /> <span> sales@pv-system.net </span>
                  </li>
                </a>

                <a
                  href="https://www.google.com/maps?q=38.5598,68.7870"
                  target="_blank"
                >
                  <li>
                    <Map />
                    <span>Tajikistan Dushanbe</span>
                  </li>
                </a>
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
