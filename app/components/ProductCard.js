export default function ProductCard({ product }) {
  return (
    <a href={product.url} target="_blank" rel="noopener noreferrer"
       className="product-card group block border-2 border-[#2a2a2a] bg-[var(--surface)] overflow-hidden">
      <div className="aspect-square bg-[var(--surface)] bg-cover bg-center"
           style={{ backgroundImage: `url(${product.image})` }} />
      <div className="flex items-center justify-between gap-2 px-3 py-3 border-t-2 border-[#2a2a2a]">
        <span className="font-display uppercase text-sm sm:text-base leading-none">{product.name}</span>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--muted)] group-hover:text-[var(--acid)] transition-colors whitespace-nowrap">View ↗</span>
      </div>
    </a>
  );
}
