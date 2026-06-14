const ETSY_SHOP = "https://www.etsy.com/shop/MurdyPickleSociety";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--acid)] bg-black">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <img src="/logo.png" alt="Murdy Pickle Society" className="h-16 w-auto" />
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[var(--muted)]">
          <a href={ETSY_SHOP} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--acid)]">Etsy</a>
          <a href="https://www.instagram.com/murdypicklesociety/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--acid)]">Instagram</a>
          <span>© {new Date().getFullYear()} Murdy Pickle Society</span>
        </div>
      </div>
    </footer>
  );
}
