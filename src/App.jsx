import { lazy, Suspense, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Spin } from "antd";

// Ленивый импорт компонентов
const AdminPanelBusiness = lazy(() => import("./containers/AdminPanel"));
const ProductsBussiness = lazy(() =>
  import("./containers/ProductsBussines/ProductsBussiness")
);
const Layout = lazy(() => import("./Layout"));
const AboutUs = lazy(() => import("./Layout/AboutUs/AboutUs"));
const HotProducts = lazy(() => import("./Layout/HotProducts/HotProducts"));
const OurVision = lazy(() => import("./Layout/OurVision/OurVision"));
const ProductDetails = lazy(() =>
  import("./Layout/ProductsDetail/ProductDetails")
);
const SolarSystem = lazy(() => import("./Layout/SolarSystem/SolarSystem"));
const SomeInfo = lazy(() => import("./Layout/SomeInfo/SomeInfo"));
const WhyChooseUs = lazy(() => import("./Layout/WhyChooseUs/WhyChooseUs"));
const Carousel = lazy(() => import("./Layout/Carousel/Carousel"));
const PageNotFound = lazy(() => import("./Layout/404"));

function MainLayout() {
  useEffect(() => {
    document.title = "Главная";
  }, []);

  return (
    <>
      <Carousel />
      <WhyChooseUs />
      <SomeInfo />
      <HotProducts />
      <OurVision />
      <SolarSystem />
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
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                      width: "100vw",
                    }}
                  >
                    <Spin size="large" />
                  </div>
                }
              >
                <MainLayout />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/about-us"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                      width: "100vw",
                    }}
                  >
                    <Spin size="large" />
                  </div>
                }
              >
                <AboutUs />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/products"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                      width: "100vw",
                    }}
                  >
                    <Spin size="large" />
                  </div>
                }
              >
                <ProductsBussiness />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/adPan"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <AdminPanelBusiness />
            </Suspense>
          }
        />

        <Route
          path="/products/:id"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <ProductDetails />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                  }}
                >
                  <Spin size="large" />
                </div>
              }
            >
              <PageNotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
