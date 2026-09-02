import products from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="px-6 md:px-16 py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-red-500 font-mono text-sm mb-2">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Latest_Drops
          </h2>
        </div>
        <button className="border border-white/30 px-5 py-2 uppercase text-sm hover:border-red-500 transition-colors">
          View_All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}