import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-sm">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        متجر المنتجات الذكي
      </h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <div className="mt-8">
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </div>
  );
}
