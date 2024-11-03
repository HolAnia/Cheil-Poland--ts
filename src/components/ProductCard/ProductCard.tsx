import React, { useState } from 'react';
import {
  CardWrapper,
  ProductImg,
  ProductName,
  ProductAttribute,
  AttributeValue,
  ProductEnergeticClass,
  EnergeticClassWrapper,
  EnergeticClass,
  PriceWrapper,
  PriceElement,
  CurrencyWrapper,
  CurrencyElement,
  LoanElement,
  ButtonElement
} from './productCardStyles';
import content from '../../data/content.json';

interface Product {
  img: string;
  name: string;
  capacity: string;
  dimensions: string;
  functions: string[];
  energetic_class: string;
  time_price: string;
  price: string;
  installment: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [btnActive, setBtn] = useState<boolean>(true);

  const handleBtnClick = () => {
    setBtn((prev) => !prev);
  };

  return (
    <CardWrapper>
      <ProductImg src={product.img} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductAttribute>
        {content.product_card.capacity}:
        <AttributeValue> {product.capacity}</AttributeValue>
      </ProductAttribute>
      <ProductAttribute>
        {content.product_card.dimensions}:
        <AttributeValue> {product.dimensions}</AttributeValue>
      </ProductAttribute>
      <ProductAttribute>
        {content.product_card.functions}:
        {product.functions.map((func, index) => (
          <AttributeValue key={index}>
            {func}
            {index < product.functions.length - 1 ? ', ' : ''}
          </AttributeValue>
        ))}
      </ProductAttribute>
      <EnergeticClassWrapper>
        <ProductEnergeticClass>{content.product_card.energetic}</ProductEnergeticClass>
        <EnergeticClass>{product.energetic_class}</EnergeticClass>
      </EnergeticClassWrapper>
      <ProductAttribute>{content.product_card.price_time}{product.time_price}</ProductAttribute>
      <PriceWrapper>
        <PriceElement>{product.price.split('.')[0]}</PriceElement>
        <CurrencyWrapper>
          <CurrencyElement>{product.price.split('.')[1]}</CurrencyElement>
          <CurrencyElement>{content.product_card.currency}</CurrencyElement>
        </CurrencyWrapper>
      </PriceWrapper>
      <LoanElement>
        {Math.round((parseFloat(product.price) / product.installment) * 100) / 100}
        {content.product_card.loan_info}
        {product.installment}
        {content.product_card.installment}
      </LoanElement>
      <ButtonElement onClick={handleBtnClick} $active={btnActive}>
        {btnActive ? content.product_card.choose : content.product_card.choossen}
      </ButtonElement>
    </CardWrapper>
  );
};

export default ProductCard;
