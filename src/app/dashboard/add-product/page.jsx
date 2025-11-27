"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AddProductPage() {
  const { status } = useSession(); // extra guard; middleware already protects
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    priority: "medium",
    imageUrl: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/products`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to add product");

      setForm({
        title: "",
        shortDescription: "",
        description: "",
        price: "",
        priority: "medium",
        imageUrl: "",
      });
      setMessage("Product added successfully ✨");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
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
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-slate-50">
          Add a new product
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          This page is protected. Only logged-in users can add new products to
          the catalog.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/50 text-sm"
        >
          <div className="space-y-1">
            <label className="text-xs text-slate-300">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">
              Short description (1–2 lines)
            </label>
            <input
              name="shortDescription"
              value={form.shortDescription}
              onChange={onChange}
              required
              maxLength={160}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">Full description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              required
              rows={4}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Price ($)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={onChange}
                min="0"
                step="0.01"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Image URL (optional)</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-500 disabled:opacity-60"
          >
            {submitting ? "Adding..." : "Add product"}
          </button>

          {message && (
            <p className="mt-3 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-3 py-2 inline-block">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
