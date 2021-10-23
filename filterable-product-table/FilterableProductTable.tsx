import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import './FilterableProductTable.scss';

interface FilterableProductTableProps {}
interface FilterableProductTableState {
  isShowStocked: boolean;
  search: string;
}

export default function FilterableProductTable(
  props: FilterableProductTableProps
) {
  const [isShowStocked, setStocked] = useState(false);
  const [search, setSearch] = useState('');

  const handleStocked = (isStocked: boolean) => {
    setStocked(isStocked);
  };

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <div className="filterable-product-table">
      <SearchBar onStocked={handleStocked} onSearch={handleSearch} />
      <ProductTable isShowStocked={isShowStocked} search={search} />
    </div>
  );
}
