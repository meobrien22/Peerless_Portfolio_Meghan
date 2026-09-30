import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";
import "./launch/launch.css";
import "./launch/fluent.css";
import "./launch/analytics.css";
import "./pinboard.css";
import "./about/executive.css";
import "./bold-theme.css";
import "./peerless-theme.css";
import "./sample-brand.css";

export const metadata: Metadata = {
  title: "Meghan Fasano | Visual Design & Communications",
  description: "Executive storytelling, UX/UI leadership, presentation design and AI workshops. A visual portfolio by Meghan Fasano.",
  icons: {
    icon: "/__GITHUB_PAGES_BASE__/favicon.svg",
    shortcut: "/__GITHUB_PAGES_BASE__/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
