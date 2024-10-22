import { Suspense, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AdminPanelBusiness from "./containers/AdminPanel";
import ProductsBussiness from "./containers/ProductsBussines/ProductsBussiness";
import Layout from "./Layout";
import AboutUs from "./Layout/AboutUs/AboutUs";
import HotProducts from "./Layout/HotProducts/HotProducts";
import OurVision from "./Layout/OurVision/OurVision";
import SolarSystem from "./Layout/SolarSystem/SolarSystem";
import SomeInfo from "./Layout/SomeInfo/SomeInfo";
import WhyChooseUs from "./Layout/WhyChooseUs/WhyChooseUs";
import ProductDetails from "./Layout/ProductsDetail/ProductDetails";

function MainLayout() {
  return (
    <>
      <WhyChooseUs />
      <SomeInfo />
      <HotProducts />
      <OurVision />
      <SolarSystem />
      {/* <MoreProducts /> */}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback="">
                <MainLayout />
              </Suspense>
            }
          />
        </Route>

        <Route path="/about-us" element={<Layout />}>
          <Route index element={<AboutUs />} />
        </Route>

        <Route path="/products" element={<Layout />}>
          <Route index element={<ProductsBussiness />} />
        </Route>

        <Route path="/adPan" element={<AdminPanelBusiness />} />

        <Route path="/products" element={<Layout />}>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
