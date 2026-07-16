import NotFound from "../../../pages/EmptyProducts";
import ProductCard from "./ProductCard";


const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;