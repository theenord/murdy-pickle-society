import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <section id="shop" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display text-4xl sm:text-5xl uppercase">The <span className="text-[var(--acid)]">Drop</span></h2>
        <span className="text-[var(--muted)] uppercase tracking-widest text-xs">Tap a piece → Etsy</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((p) => <ProductCard key={p.name} product={p} />)}
      </div>
    </section>
  );
}
