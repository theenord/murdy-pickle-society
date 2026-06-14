export default function Marquee() {
  const text = "MURDY PICKLE SOCIETY  •  BORROWED BLACKTOP  •  FEARLESS MASH-UPS  •  PADDLES UP  •  ";
  return (
    <div className="border-y-2 border-[var(--acid)] bg-[var(--acid)] text-black overflow-hidden">
      <div className="mps-marquee-track py-2 font-display uppercase tracking-wide text-lg">
        <span className="px-2">{text.repeat(4)}</span>
        <span className="px-2">{text.repeat(4)}</span>
      </div>
    </div>
  );
}
