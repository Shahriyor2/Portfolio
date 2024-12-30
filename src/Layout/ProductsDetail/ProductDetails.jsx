// import { message } from "antd";
// import axios from "axios";
// import { Home, Slash } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { Link, useParams } from "react-router-dom";
// import FooterBs from "../../containers/FooterBussiness/FoterBs";
// import ClientInfo from "../ClientInfo/ClientInfo";
// import Navbar from "../Navbar/Navbar";
// import classes from "./productDetails.module.scss";
// import background from "/public/assets/about-us/background.jpg";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [pdfUrl, setPdfUrl] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://10.251.4.131/kurbonoff/getProducts?id=${id}`
//         );
//         setProduct(response.data.data.records);
//         const pdfPath = response.data.data.records[0]?.pdf_path;
//         if (pdfPath) {
//           const pdfUrl = `http://10.251.4.131/kurbonoff/upload?filename=${pdfPath}`;
//           console.log("PDF URL:", pdfUrl);
//           setPdfUrl(pdfUrl);
//         }
//       } catch (error) {
//         console.error("Ошибка загрузки продукта:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) {
//     return <p>Загрузка...</p>;
//   }

//   if (!product) {
//     return <p>Продукт не найден</p>;
//   }

//   const handleDownloadPDF = async (image_path) => {
//     try {
//       const response = await axios.get(
//         `http://10.251.4.131/kurbonoff/upload?filename=${image_path}`,
//         {
//           responseType: "blob",
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "filename.pdf");
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       message.success("PDF-файл успешно загружен!");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className={classes["container"]}>
//       <ClientInfo />
//       <Navbar />
//       {/* показ навигации */}
//       <div className={classes["bread-background"]}>
//         <img height={205} src={background} alt="" />
//         <div className={classes["bread-background__title"]}>
//           <Link to="/">
//             <Home />
//             <h1>Home</h1>
//           </Link>
//           <span>
//             <Slash />
//           </span>

//           <Link to="/products">
//             <h1>Products</h1>
//             <span>
//               <Slash />
//             </span>
//           </Link>
//           {product.map((item) => (
//             <h1 style={{ textTransform: "uppercase" }} key={item.id}>
//               {item?.title}
//             </h1>
//           ))}
//         </div>
//       </div>
//       <section className={classes["first-overlay"]}>
//         <div className={classes["product-container-info"]}>
//           <div className={classes["product-container-info__left-section"]}>
//             {product.map((item) => {
//               return (
//                 <img
//                   key={item.id}
//                   src={`http://10.251.4.131/kurbonoff/upload?filename=${item.image_path}`}
//                   alt="image"
//                 />
//               );
//             })}
//           </div>

//           <div className={classes["product-container-info__right-section"]}>
//             {product.map((item) => (
//               <div
//                 className={classes["overlay"]}
//                 // style={{ display: "flex", flexDirection: "column" }}
//                 key={item.id}
//               >
//                 <h1 style={{ textTransform: "uppercase" }}>{item?.title}</h1>
//                 <p>{item?.description}</p>
//                 <button
//                   onClick={() => handleDownloadPDF(item.pdf_path)}
//                   className={classes["product-container-info__btn"]}
//                 >
//                   PDF DOWNLOAD
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Если PDF URL существует, отображаем PDF */}
//       {pdfUrl && (
//         <section
//           className={classes["pdf-overlay"]}
//           style={{ padding: "40px 0" }}
//         >
//           <h2>PDF Preview</h2>
//           <Document
//             file={pdfUrl}
//             onLoadError={console.error}
//             onLoadSuccess={() => console.log("PDF загружен")}
//           >
//             <Page pageNumber={1} />
//           </Document>
//         </section>
//       )}
//       <FooterBs />
//     </section>
//   );
// };

// export default ProductDetails;

import axios from "axios";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import FooterBs from "../../containers/FooterBussiness/FoterBs";
import ClientInfo from "../ClientInfo/ClientInfo";
import Navbar from "../Navbar/Navbar";
import classes from "./productDetails.module.scss";
import { useParams } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://10.251.4.131/kurbonoff/getProducts?id=${id}`
        );
        setProduct(response.data.data.records);
        const pdfPath = response.data.data.records[0]?.pdf_path;
        const pdfUrl = `http://10.251.4.131/kurbonoff/upload?filename=${pdfPath}`;
        setPdfUrl(pdfUrl);
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

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className={classes["container"]}>
      <ClientInfo />
      <Navbar />
      <section className={classes["first-overlay"]}>
        <div className={classes["product-container-info"]}>
          <div className={classes["product-container-info__left-section"]}>
            {product.map((item) => (
              <img
                key={item.id}
                src={`http://10.251.4.131/kurbonoff/upload?filename=${item.image_path}`}
                alt="image"
              />
            ))}
          </div>

          <div className={classes["product-container-info__right-section"]}>
            {product.map((item) => (
              <div className={classes["overlay"]} key={item.id}>
                <h1 style={{ textTransform: "uppercase" }}>{item?.title}</h1>
                <p>{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pdfUrl && (
        <section className={classes["pdf-overlay"]}>
          <h2>Содержимое PDF</h2>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.log("Ошибка загрузки PDF:", error)}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </section>
      )}
      <FooterBs />
    </section>
  );
};

export default ProductDetails;
