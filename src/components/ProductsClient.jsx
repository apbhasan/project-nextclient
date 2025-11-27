"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

const priorities = [
  { label: "All priorities", value: "all" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

export default function ProductsClient({ initialProducts = [] }) {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("all");

  const filtered = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase());

      const matchesPriority =
        priority === "all" ? true : p.priority === priority;

      return matchesQuery && matchesPriority;
    });
  }, [initialProducts, query, priority]);

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Search + filter bar */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/40 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-2">
            <label className="block text-xs text-slate-400">
              Search products
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="w-full md:w-56">
            <label className="block text-xs text-slate-400">
              Priority filter (UI only)
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
            >
              {priorities.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.length === 0 && (
            <p className="text-sm text-slate-400">
              No products found. Try adjusting your search.
            </p>
          )}

          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
