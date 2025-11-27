"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function ManageProductsPage() {
  const { status } = useSession();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/products`
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const onDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    setDeletingId(id);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/products/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error("Failed to delete");
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    } finally {
      setDeletingId(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
        Checking session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-slate-50">
          Manage products
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Review, view details, or delete products from the catalog.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/50">
          <div className="hidden w-full min-w-full text-xs text-slate-300 md:table">
            <div className="table-row bg-slate-900/90">
              <div className="table-cell px-4 py-3">Title</div>
              <div className="table-cell px-4 py-3">Priority</div>
              <div className="table-cell px-4 py-3">Price</div>
              <div className="table-cell px-4 py-3">Created</div>
              <div className="table-cell px-4 py-3 text-right">Actions</div>
            </div>

            {loading && (
              <div className="table-row">
                <div className="table-cell px-4 py-4 text-slate-400" colSpan={5}>
                  Loading products...
                </div>
              </div>
            )}

            {!loading &&
              products.map((p) => (
                <div
                  key={p._id}
                  className="table-row border-t border-slate-800"
                >
                  <div className="table-cell px-4 py-3 text-sm">
                    <span className="line-clamp-1">{p.title}</span>
                  </div>
                  <div className="table-cell px-4 py-3 text-xs uppercase text-slate-400">
                    {p.priority}
                  </div>
                  <div className="table-cell px-4 py-3 text-sm text-emerald-300">
                    ${p.price?.toFixed(2)}
                  </div>
                  <div className="table-cell px-4 py-3 text-xs text-slate-400">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </div>
                  <div className="table-cell px-4 py-3 text-right text-xs">
                    <Link
                      href={`/products/${p._id}`}
                      className="mr-3 inline-flex items-center justify-center rounded-full border border-slate-600 px-3 py-1 text-[11px] text-slate-100 hover:border-emerald-400"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => onDelete(p._id)}
                      disabled={deletingId === p._id}
                      className="inline-flex items-center justify-center rounded-full bg-red-500/80 px-3 py-1 text-[11px] font-medium text-white hover:bg-red-500 disabled:opacity-60"
                    >
                      {deletingId === p._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}

            {!loading && products.length === 0 && (
              <div className="table-row">
                <div className="table-cell px-4 py-4 text-slate-400" colSpan={5}>
                  No products yet. Try adding one from the “Add Product” page.
                </div>
              </div>
            )}
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 p-4 md:hidden">
            {loading && (
              <p className="text-sm text-slate-400">Loading products...</p>
            )}
            {!loading && products.length === 0 && (
              <p className="text-sm text-slate-400">
                No products yet. Try adding one from the “Add Product” page.
              </p>
            )}
            {!loading &&
              products.map((p) => (
                <div
                  key={p._id}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-sm"
                >
                  <div className="font-semibold text-slate-100 line-clamp-1">
                    {p.title}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                    <span className="uppercase">{p.priority}</span>
                    <span className="text-emerald-300">
                      ${p.price?.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-3 flex justify-end gap-2 text-xs">
                    <Link
                      href={`/products/${p._id}`}
                      className="rounded-full border border-slate-600 px-3 py-1 text-slate-100 hover:border-emerald-400"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => onDelete(p._id)}
                      disabled={deletingId === p._id}
                      className="rounded-full bg-red-500/80 px-3 py-1 text-white hover:bg-red-500 disabled:opacity-60"
                    >
                      {deletingId === p._id ? "..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
