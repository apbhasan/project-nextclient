import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/20">
      {/* Image / icon */}
      <div className="mb-3 h-32 w-full overflow-hidden rounded-xl bg-slate-800/70">
        {product.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
            No image
          </div>
        )}
      </div>

      {/* Title + short description */}
      <h3 className="line-clamp-1 text-sm font-semibold text-slate-100">
        {product.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs text-slate-400">
        {product.shortDescription}
      </p>

      {/* Meta + actions */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="space-y-1">
          <div className="text-emerald-300 font-semibold">
            ${Number(product.price || 0).toFixed(2)}
          </div>
          <div className="text-[11px] uppercase text-slate-500">
            {product.priority || "medium"}
          </div>
        </div>
        <Link
          href={`/products/${product._id}`}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-500"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
