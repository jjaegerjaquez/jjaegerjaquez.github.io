import './globals.css';
import { inconsolata } from './fonts';

export const metadata = {
  title: "J Sanchez",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
