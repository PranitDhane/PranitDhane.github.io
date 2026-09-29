import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%235b50e8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Arial Black,sans-serif' font-weight='900' font-size='13' fill='white' letter-spacing='-0.5'%3EPD%3C/text%3E%3C/svg%3E";

const description =
  "AI engineer building production RAG pipelines, multi-agent systems, and the backend platforms that make LLMs reliable. AI Engineer at Cerillion Technologies.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pranitdhane.github.io"),
  title: "Pranit Dhane | AI Engineer",
  description,
  icons: {
    icon: faviconSvg,
  },
  openGraph: {
    title: "Pranit Dhane | AI Engineer",
    description,
    type: "website",
    url: "https://pranitdhane.github.io",
    siteName: "Pranit Dhane",
  },
  twitter: {
    card: "summary",
    title: "Pranit Dhane | AI Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
