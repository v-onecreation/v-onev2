import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"], weight: ["300", "500", "800", "900"], variable: "--font-inter-tight", display: "swap" });

export const metadata= { title: "FRAME&CO — Creative Studio", description: "Identity. Motion. Digital." };
export const viewport= { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
