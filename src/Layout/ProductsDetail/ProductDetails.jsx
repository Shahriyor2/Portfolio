import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import classes from "./productDetails.module.scss";
import { Home, Slash } from "lucide-react";
import background from "/public/assets/about-us/background.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://10.251.4.131/kurbonoff/getProducts?id=${id}`
        );
        setProduct(response.data.data.records);
      } catch (error) {
        console.error("Ошибка загрузки продукта:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!product) {
    return <p>Продукт не найден</p>;
  }

  const handleDownloadPDF = async (image_path) => {
    try {
      const response = await axios.get(
        `http://10.251.4.131/kurbonoff/upload?filename=${image_path}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "filename.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={classes["container"]}>
      {/* показ навигации */}
      <div className={classes["bread-background"]}>
        <img height={205} src={background} alt="" />
        <div className={classes["bread-background__title"]}>
          <Link to="/">
            <Home />
            <h1>Home</h1>
          </Link>
          <span>
            <Slash />
          </span>

          <Link to="/products">
            <h1>Products</h1>
            <span>
              <Slash />
            </span>
          </Link>
          {product.map((item) => (
            <h1 style={{ textTransform: "uppercase" }} key={item.id}>
              {item?.title}
            </h1>
          ))}
        </div>
      </div>
      <section className={classes["first-overlay"]}>
        <div className={classes["product-container-info"]}>
          <div className={classes["product-container-info__left-section"]}>
            {product.map((item) => {
              return (
                <>
                  {/* <img key={item?.id} src={item?.image_path} alt="image_path" /> */}
                  <img
                    src={`http://10.251.4.131/kurbonoff/upload?filename=${item.image_path}`}
                    alt="image"
                  />
                </>
              );
            })}
          </div>

          <div className={classes["product-container-info__right-section"]}>
            {product.map((item) => (
              <>
                {console.log(item.pdf_path)}
                <h1 style={{ textTransform: "uppercase" }} key={item.id}>
                  {item?.title}
                </h1>
                <p>{item?.description}</p>
                <button
                  onClick={() => handleDownloadPDF(item.pdf_path)}
                  className={classes["product-container-info__btn"]}
                >
                  PDF DOWNLOAD
                </button>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        {product.map((item) => (
          <img
            key={item.pdf_path}
            src={`http://10.251.4.131/kurbonoff/upload?filename=${item.pdf_path}`}
          />
        ))}
      </section>
    </section>
  );
};

export default ProductDetails;
