const ETSY_SHOP = "https://www.etsy.com/shop/MurdyPickleSociety";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-[var(--acid)] text-xs sm:text-sm mb-6">Born on borrowed blacktop</p>
        <h1 className="sr-only">Murdy Pickle Society Pickleball Apparel</h1>
        <img src="/logo.png" alt="Murdy Pickle Society" className="w-64 sm:w-80 md:w-96 h-auto mx-auto" />
        <p className="mt-8 max-w-xl mx-auto text-[var(--muted)] text-base sm:text-lg">
          We taped our own lines on the blacktop and never asked permission. Samurai grit, punk edge, a streak of midnight horror. Armor for a game that belongs to anyone willing to show up. Paddles up.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#shop" className="uppercase tracking-widest text-sm font-semibold px-6 py-3 bg-[var(--acid)] text-black hover:bg-white transition-colors">See the drop ↓</a>
          <a href={ETSY_SHOP} target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-sm font-semibold px-6 py-3 border-2 border-[var(--bone)] hover:border-[var(--acid)] hover:text-[var(--acid)] transition-colors">Shop on Etsy ↗</a>
        </div>
      </div>
    </section>
  );
}
