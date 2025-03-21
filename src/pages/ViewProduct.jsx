// src/pages/ViewProduct.jsx
import ProductPage from "../components/products/ProductPage"
import { Breadcrumb } from "../components/Breadcrumb";
import RecommendedProducts from "../components/RecommendedProducts"

const ViewProduct = () => {
  const dynamicPath = "/product-details";

  return (
    <div className="p-8 px-52 max-sm:px-8">
      <Breadcrumb dynamicPath={dynamicPath} />
      <ProductPage />
      <RecommendedProducts />
    </div>
  );
};

export default ViewProduct;
