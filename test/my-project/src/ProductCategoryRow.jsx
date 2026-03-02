export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th
        colSpan="2"
        className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-slate-800/50 border-y border-slate-700"
      >
        {category}
      </th>
    </tr>
  );
}
