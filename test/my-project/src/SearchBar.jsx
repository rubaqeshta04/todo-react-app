export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) {
  return (
    <form className="flex flex-col gap-4">
      <div className="relative">
        <input
          type="text"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="ابحث عن منتج..."
          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="sr-only"
          />
          <div className={`w-10 h-5 rounded-full transition-colors ${inStockOnly ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
          <div className={`absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform ${inStockOnly ? 'translate-x-5' : 'translate-x-0'}`}></div>
        </div>
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
          عرض المنتجات المتوفرة فقط
        </span>
      </label>
    </form>
  );
}
