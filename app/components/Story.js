const ETSY_SHOP = "https://www.etsy.com/shop/MurdyPickleSociety";

export default function Story() {
  return (
    <section id="story" className="border-t-2 border-[#1d1d1d] bg-[#0e0e0e]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <h2 className="font-display text-4xl sm:text-5xl uppercase mb-6">The <span className="text-[var(--acid)]">Story</span></h2>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          Murdy Pickle Society was born on borrowed blacktop. Those cracked, forgotten courts where the game gets loud and nobody&apos;s keeping score on who belongs. We dress pickleball in fearless mash-ups: katana-clean samurai linework, spiked-leather punk attitude, and a brush of midnight-movie horror.
        </p>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
          Every piece is built for volleys that rattle fences and expectations alike. Slip into the gear and you don&apos;t just play. You broadcast a rebellion that welcomes every paddle and dares the neighborhood to keep up.
        </p>
        <a href={ETSY_SHOP} target="_blank" rel="noopener noreferrer" className="inline-block uppercase tracking-widest text-sm font-semibold px-6 py-3 bg-[var(--acid)] text-black hover:bg-white transition-colors">Browse the full shop ↗</a>
      </div>
    </section>
  );
}
