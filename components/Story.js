const ETSY_SHOP = "https://www.etsy.com/shop/MurdyPickleSociety";

export default function Story() {
  return (
    <section id="story" className="border-t-2 border-[#1d1d1d] bg-[#0e0e0e]">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <h2 className="font-display text-4xl sm:text-5xl uppercase mb-6">The <span className="text-[var(--acid)]">Story</span></h2>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          We believe the game belongs to everyone. No gatekeepers, no waiting list, no permission slip. If you want to play, the court is yours. Go take it.
        </p>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          That belief is why Murdy Pickle Society exists. We were done waiting. Other courts meant sign-ups, time slots, and standing around for a turn that never came. So we quit asking. We bought a net, hauled it out to the basketball courts at Murdy Park, taped our own lines onto the blacktop, and built a court where the rules said there shouldn&apos;t be one.
        </p>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          That is how we do everything. We show up, and we don&apos;t move. The park ranger hated it. For months it was a standoff. They peeled up our tape, we taped it back down. They told us to move along, we stayed. They tried to push us off to some other park, and we kept coming back. Tape down, net up, paddles out. Call it trespassing. We call it pickleball. It is about as punk rock as the game gets, and it is the only way we know how to play: for each other, with an edge, and with the door wide open.
        </p>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          So everyone walked through it. A few stubborn regulars grew into a rotating family that drifts in and out and always finds its way back. First-timers who had never held a paddle. Tennis players hunting a new fight. Kids, newcomers, anybody curious enough to walk up. There is smack talk. There are questionable calls. There have been a few nasty Nelsons, and yes, we hit harder than the recommended dink. Two years in, and we are still on the blacktop. It is a tradition now.
        </p>
        <p className="text-[var(--bone)] text-lg leading-relaxed mb-5">
          What we make carries all of it. The samurai, the grit, and the horror across our gear is the armor for a belief we have lived since the first strip of tape hit the blacktop: this game belongs to anyone willing to show up and claim it. Wear it, and you are part of the Society.
        </p>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-8 uppercase tracking-wide font-semibold">
          So show up. Take the court. Wear the edge. Paddles up.
        </p>
        <a href={ETSY_SHOP} target="_blank" rel="noopener noreferrer" className="inline-block uppercase tracking-widest text-sm font-semibold px-6 py-3 bg-[var(--acid)] text-black hover:bg-white transition-colors">Browse the full shop ↗</a>
      </div>
    </section>
  );
}
