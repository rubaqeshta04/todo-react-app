export default function ProductRow({ product }) {
  const name = product.stocked ? (
    <span className="text-slate-200">{product.name}</span>
  ) : (
    <span className="text-rose-400 font-medium italic">{product.name} (نفذت)</span>
  );

  return (
    <tr className="hover:bg-slate-800/30 transition-colors border-b border-slate-800 last:border-0">
      <td className="px-6 py-4 text-sm font-medium">{name}</td>
      <td className="px-6 py-4 text-sm text-slate-400">{product.price}</td>
    </tr>
  );
}
