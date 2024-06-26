import { Inter } from "next/font/google";
import BG from "@/components/bg";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANXNDSGN",
  description: "ANXNDSGN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <BG />
      </body>
    </html>
  );
}
