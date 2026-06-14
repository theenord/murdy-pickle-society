import { Anton, Inter } from "next/font/google";
import "./globals.css";
import "./theme.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Murdy Pickle Society | Pickleball Apparel",
  description:
    "Born on borrowed blacktop. Fearless pickleball apparel that mashes up samurai linework, punk attitude, and a brush of midnight-movie horror. Designs built to rattle fences and expectations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
