import React, { useEffect, useState } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

import { MOCK_DATA } from './mock-data';

interface ProductTableProps {
  isShowStocked: boolean;
  search: string;
}

export default function ProductTable({
  isShowStocked,
  search,
}: ProductTableProps) {
  // const data = MOCK_DATA;

  const [data, setData] = useState([]);

  useEffect(() => {
    import('./mock-data').then(({ MOCK_DATA }) => {
      setData(MOCK_DATA);
      // console.log(MOCK_DATA);
    });
  });

  let currentCategory = undefined;

  const renderCategory = (item: any) => {
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      return <ProductCategoryRow {...item} />;
    }
  };

  return (
    <div className="product-table">
      <div className="product-table-header">
        <div className="name">Name</div>
        <div className="price">Price</div>
      </div>
      <div className="product-table-content">
        {!isShowStocked
          ? data
              .filter((item: any) => item.name.includes(search))
              .map((item: any) => (
                <div key={item.name}>
                  {renderCategory(item)}
                  <ProductRow key={item.name} {...item} />
                </div>
              ))
          : data
              .filter((item: any) => item.stocked)
              .filter((item: any) => item.name.includes(search))
              .map((item: any) => (
                <div key={item.name}>
                  {renderCategory(item)}
                  <ProductRow key={item.name} {...item} />
                </div>
              ))}
      </div>
    </div>
  );
}
