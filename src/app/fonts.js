import { Inconsolata, Staatliches } from 'next/font/google';

export const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  weight: ['400', '300', '500', '900'],
});

export const staatliches = Staatliches({ subsets: ["latin"], weight: ['400'] });