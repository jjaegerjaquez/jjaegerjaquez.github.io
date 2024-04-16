import { Inconsolata, Staatliches, Inter } from 'next/font/google';

export const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  weight: ['400', '300', '500', '900'],
});

export const staatliches = Staatliches({ subsets: ["latin"], weight: ['400'] });

export const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });