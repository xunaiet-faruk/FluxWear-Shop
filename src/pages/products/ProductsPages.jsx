import { useState, useMemo } from 'react';

import ProductBanner from '../../components/ui/products/ProductBanner';
import ProductFilter from '../../components/ui/products/ProductFilter';
import ProductGrid from '../../components/ui/products/ProductGrid';
import { productsData } from '../../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  const categories = useMemo(() => {
    const cats = productsData.map(p => p.category);
    return [...new Set(cats)];
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = selectedCategory === 'all' 
      ? productsData 
      : productsData.filter(p => p.category === selectedCategory);
    switch (sortOption) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortOption]);

  return (
    <div className="bg-[#200101] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductBanner categoryCount={productsData.length} />
        
        <div className="mt-8">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            productCount={filteredAndSortedProducts.length}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
          
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;