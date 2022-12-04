import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductFeatures from "./Products";
import Listpage from "./Products/pages/Listpage";
import DetailPage from "./Products/pages/DetailPage";
import ProductDescription from "./Products/components/ProductDescription";
import ProductAdditional from "./Products/components/ProductAdditional";
import ProductReview from "./Products/components/ProductReview";
import CartFeature from "./Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="products">
          <Route index={true} element={<ProductFeatures />}></Route>

          <Route path=":productId" element={<DetailPage />}>
            <Route index={true} element={<ProductDescription />}></Route>

            <Route path="additional" element={<ProductAdditional />} />
            <Route path="review" element={<ProductReview />} />
          </Route>
        </Route>
        <Route path="cart" element={<CartFeature />}></Route>

        {/* <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
