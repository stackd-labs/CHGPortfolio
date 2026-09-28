import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "./components/CursorFollower";
import Grain from "./components/Grain";

export const metadata: Metadata = {
  title: "Chanel Hicks-Gray | AI Architect & Builder",
  description:
    "I build your app, or I rescue the one that stalled. AI architect and builder shipping production systems with real auth, payments, and agents. Available for builds, rescues, and contract or fractional AI architect roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Grain />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
