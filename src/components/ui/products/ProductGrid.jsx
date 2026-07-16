import ProductCard from './ProductCard';
import EmptyProducts from './EmptyProducts';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <EmptyProducts />;
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