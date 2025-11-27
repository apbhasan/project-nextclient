import ProductsClient from "@/components/ProductsClient";


async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/products`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="text-slate-400 mb-8">Browse our luxury tech collection</p>

      {/* Debug print */}
      <pre className="text-green-400 text-xs mb-4">
        {JSON.stringify(products, null, 2)}
      </pre>

      <ProductsClient initialProducts={products} />
    </div>
  );
}
