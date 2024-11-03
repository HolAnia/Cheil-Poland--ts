import React, { useState } from 'react';
import { useFilters } from '../../FilterProvider';
import ProductCard from '../ProductCard/ProductCard';
import { 
  ListingWrapper, 
  AllProducts, 
  ProductsWrapper, 
  BtnLoadMore, 
  Empty 
} from './productListingStyles';
import content from '../../data/content.json';

interface Product {
  id: string;
  name: string;
  img: string;
  capacity: string;
  dimensions: string;
  functions: string[];
  energetic_class: string;
  price: string;
  time_price: string;
  installment: number;
}

interface ProductListingProps {
  products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  const [productCount, setProductCount] = useState<number>(6);
  const { filters } = useFilters();

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLowerCase();
    const searchValue = filters.search.toLowerCase();
    return (
      (filters.capacity === '' || product.capacity === filters.capacity) &&
      (filters.energetic_class === '' || product.energetic_class === filters.energetic_class) &&
      (filters.functions === '' || product.functions.includes(filters.functions)) &&
      (filters.search === '' || name.includes(searchValue))
    );
  });

  const sortProducts = (products: Product[]): Product[] => {
    if (filters.sort === '') return products;

    const sortedProducts = [...products];
    switch (filters.sort) {
      case 'price':
        return sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case 'capacity':
        return sortedProducts.sort((a, b) => parseFloat(a.capacity) - parseFloat(b.capacity));
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const handleProductCount = () => {
    setProductCount((prevCount) => prevCount + 3);
  };

  return (
    <ListingWrapper>
      <AllProducts>
        {content.lisitng} {sortedProducts.length}
      </AllProducts>
      <ProductsWrapper>
        {sortedProducts.length === 0 ? (
          <Empty>{content.empty}</Empty>
        ) : (
          sortedProducts.slice(0, productCount).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </ProductsWrapper>
      {productCount < sortedProducts.length && (
        <BtnLoadMore onClick={handleProductCount}>{content.load_more}</BtnLoadMore>
      )}
    </ListingWrapper>
  );
};

export default ProductListing;
