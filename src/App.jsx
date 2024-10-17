import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanelBusiness from "./containers/AdminPanel";
import ProductsBussiness from "./containers/ProductsBussines/ProductsBussiness";
import Layout from "./Layout";
import AboutUs from "./Layout/AboutUs/AboutUs";
import HotProducts from "./Layout/HotProducts/HotProducts";
import MoreProducts from "./Layout/MoreProducts/MoreProducts";
import OurVision from "./Layout/OurVision/OurVision";
import SolarSystem from "./Layout/SolarSystem/SolarSystem";
import SomeInfo from "./Layout/SomeInfo/SomeInfo";
import WhyChooseUs from "./Layout/WhyChooseUs/WhyChooseUs";

function MainLayout() {
  return (
    <>
      <WhyChooseUs />
      <SomeInfo />
      <HotProducts />
      <OurVision />
      <SolarSystem />
      <MoreProducts />
    </>
  );
}

export function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
