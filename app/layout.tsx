import type { Metadata } from "next";
import "./globals.css";
import MotionPreferences from "./components/MotionPreferences";

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
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <MotionPreferences>{children}</MotionPreferences>
        <CookieNotice />
      </body>
    </html>
  );
}
import CookieNotice from './CookieNotice'
