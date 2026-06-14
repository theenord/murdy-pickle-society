import Image from "next/image";

const ETSY_SHOP = "https://www.etsy.com/shop/MurdyPickleSociety";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(11,11,11,0.82)] border-b-2 border-[var(--acid)]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center shrink-0">
          <Image src="/logo.png" alt="Murdy Pickle Society" width={768} height={634} priority sizes="58px" className="h-11 sm:h-12 w-auto" />
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm uppercase tracking-widest">
          <a href="#shop" className="hover:text-[var(--acid)] transition-colors">Shop</a>
          <a href="#story" className="hover:text-[var(--acid)] transition-colors">Story</a>
          <a href="#contact" className="hover:text-[var(--acid)] transition-colors">Contact</a>
        </nav>
        <a href={ETSY_SHOP} target="_blank" rel="noopener noreferrer"
           className="text-xs sm:text-sm uppercase tracking-widest font-semibold px-3 py-2 bg-[var(--acid)] text-black hover:bg-white transition-colors">
          Shop on Etsy ↗
        </a>
      </div>
    </header>
  );
}
