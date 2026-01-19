import "./globals.css";
import type { Metadata } from "next";
import SiteShell from "@/components/siteShell";

export const metadata: Metadata = {
  title: "Orris — Reading Clarity Tool",
  description:
    "Orris highlights persuasive language and offers a neutral rewrite for clarity — only when you click Analyze.",
  metadataBase: new URL("https://getorris.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
