// src/pages/AllProducts.jsx
import FilterInterface from "../components/products/FilterInterface"
import ProductGrid from "../components/products/ProductGrid"
import HeroSection from "../components/products/HeroSection"

const AllProducts = () => {
  return (
    <div className="flex flex-row p-8 max-sm:flex-col max-sm:p-0 gap-24 max-sm:gap-0">
      <FilterInterface />
      <div className="flex flex-col">
        <HeroSection />
        <ProductGrid />
      </div>
    </div>
  );
};

export default AllProducts;
