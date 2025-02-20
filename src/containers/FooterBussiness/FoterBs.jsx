import { useEffect, useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import axios from "axios";
import { message } from "antd";

const FooterBs = () => {
  const [categoryIdData, setCategoryIdData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://solartech.tj/kurbonoff/getCategories"
        );
        setCategoryIdData(result.data.data);
      } catch (error) {
        message.error("Неполадки с сетью");
        setCategoryIdData("Пока нет данных!");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <Footer categoriesData={categoryIdData} />;
};

export default FooterBs;
