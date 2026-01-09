import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orris – Make sense of the news without being told what to think",
  description:
    "Orris is a companion that rewrites articles neutrally and shows how language shapes perception—so you can see through the noise and decide for yourself.",
  keywords: [
    "news analysis",
    "media literacy",
    "neutral news",
    "bias detection",
    "critical thinking",
    "chrome extension",
  ],
  authors: [{ name: "Orris" }],
  openGraph: {
    title: "Orris – Make sense of the news",
    description:
      "A companion that rewrites articles neutrally and shows how language shapes perception.",
    url: "https://getorris.com",
    siteName: "Orris",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orris – Make sense of the news",
    description:
      "A companion that rewrites articles neutrally and shows how language shapes perception.",
  },
  metadataBase: new URL("https://getorris.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

