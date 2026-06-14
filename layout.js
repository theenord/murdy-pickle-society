:root{
  --bg:#0b0b0b;
  --surface:#151515;
  --bone:#ece9e0;
  --muted:#8f8f86;
  --acid:#c2f000;
  --blood:#e10600;
}
html, body{
  background-color: var(--bg) !important;
  color: var(--bone) !important;
}
body{
  font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.font-display{
  font-family: var(--font-anton), Impact, "Arial Black", sans-serif;
  letter-spacing:.01em;
}
/* film-grain overlay */
.grain::after{
  content:""; position:fixed; inset:0; z-index:60; pointer-events:none; opacity:.05;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
/* marquee */
@keyframes mps-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.mps-marquee-track{ display:inline-flex; white-space:nowrap; animation: mps-marquee 30s linear infinite; }
/* product card hover */
.product-card{ transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease; }
.product-card:hover{ transform: translateY(-4px) rotate(-.5deg); border-color: var(--acid); box-shadow:0 10px 30px rgba(0,0,0,.5); }
