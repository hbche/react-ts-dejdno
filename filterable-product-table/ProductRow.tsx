import React from 'react';

interface ProductRowProps {
  name: string;
  price: string;
  stocked: boolean;
  isShowStocked: boolean;
}

export default function ProductRow({ name, price, stocked }: ProductRowProps) {
  return (
    <div className="product-row">
      <div className={stocked ? `name` : `name stocked`}>{name}</div>
      <div className="price">{price}</div>
    </div>
  );
}
