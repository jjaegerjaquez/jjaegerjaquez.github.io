import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "J Sanchez",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
