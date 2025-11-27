import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="text-sm text-slate-400">Product not found.</p>
          <Link
            href="/products"
            className="mt-4 inline-flex text-sm text-emerald-400 hover:text-emerald-300"
          >
            ← Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Link
          href="/products"
          className="text-sm text-emerald-400 hover:text-emerald-300"
        >
          ← Back to products
        </Link>

        {/* Banner / image */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/50">
          <div className="h-56 w-full bg-slate-900">
            {product.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                No image provided
              </div>
            )}
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-semibold text-slate-50">
              {product.title}
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              {product.description}
            </p>

            {/* Meta info */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
              <div>
                <span className="text-slate-500">Price:</span>{" "}
                <span className="font-semibold text-emerald-300">
                  ${product.price?.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="text-slate-500">Priority:</span>{" "}
                <span className="uppercase">{product.priority}</span>
              </div>
              <div>
                <span className="text-slate-500">Created:</span>{" "}
                {new Date(product.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
