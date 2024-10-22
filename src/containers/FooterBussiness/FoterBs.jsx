import { useEffect, useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import axios from "axios";

const FooterBs = () => {
  const [categoryIdData, setCategoryIdData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://10.251.4.131/kurbonoff/getCategories"
        );
        setCategoryIdData(result.data.data);
      } catch (error) {
        setCategoryIdData("Пока нет данных!");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <Footer categoriesData={categoryIdData} />;
};

export default FooterBs;
