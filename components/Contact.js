"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzndkgg";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) { return; }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <h2 className="font-display text-4xl sm:text-5xl uppercase mb-2">Get <span className="text-[var(--acid)]">in touch</span></h2>
      <p className="text-[var(--muted)] mb-8">Questions, collabs, custom asks. Send it over.</p>

      {status === "sent" ? (
        <div className="border-2 border-[var(--acid)] p-6 text-center">
          <p className="font-display text-2xl uppercase text-[var(--acid)]">Message sent</p>
          <p className="text-[var(--muted)] mt-1">We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" required placeholder="NAME"
            className="w-full bg-[var(--surface)] border-2 border-[#2a2a2a] focus:border-[var(--acid)] outline-none px-4 py-3 uppercase tracking-wide text-sm" />
          <input type="email" name="email" required placeholder="EMAIL"
            className="w-full bg-[var(--surface)] border-2 border-[#2a2a2a] focus:border-[var(--acid)] outline-none px-4 py-3 uppercase tracking-wide text-sm" />
          <textarea name="message" required rows={5} placeholder="MESSAGE"
            className="w-full bg-[var(--surface)] border-2 border-[#2a2a2a] focus:border-[var(--acid)] outline-none px-4 py-3 uppercase tracking-wide text-sm" />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button type="submit" disabled={status === "sending"}
            className="uppercase tracking-widest text-sm font-semibold px-6 py-3 bg-[var(--acid)] text-black hover:bg-white transition-colors disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send it →"}
          </button>
          {status === "error" && <p className="text-[var(--blood)] text-sm">Something went wrong. Try again in a moment.</p>}
        </form>
      )}
    </section>
  );
}
