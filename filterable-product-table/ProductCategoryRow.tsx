import React from 'react';

interface ProductCategoryRowProps {
  category: string;
}

export default function ProductCategoryRow({
  category,
}: ProductCategoryRowProps) {
  return <div className="product-category-row">{category}</div>;
}
