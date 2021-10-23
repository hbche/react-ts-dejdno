import React from 'react';

interface SearchBarProps {
  onStocked: (isStocked: boolean) => void;
  onSearch: (search: string) => void;
}

export default function SearchBar({ onStocked, onSearch }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div>
        <input
          placeholder="Search..."
          onChange={(e: any) => onSearch(e.target.value.trim())}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e: any) => {
            onStocked(e.target.checked);
          }}
        />
        Only show products in stock.
      </div>
    </div>
  );
}
