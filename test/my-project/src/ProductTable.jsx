import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  if (!products) return null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-slate-800">
            <th className="px-6 py-3 text-sm font-semibold text-slate-300">الاسم</th>
            <th className="px-6 py-3 text-sm font-semibold text-slate-300">السعر</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan="2" className="px-6 py-10 text-center text-slate-500 italic">
                لم يتم العثور على منتجات تطابق بحثك...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}