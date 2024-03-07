'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const INITIAL_CLASS = 'flex justify-between px-[15px] md:px-[35px] py-3 transition-colors delay-75 ease-out font-light text-lg sticky top-0';

const Nav = () => {
  const [mergedClass, setMergedClass] = useState(INITIAL_CLASS);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 97) {
        setMergedClass(clsx(INITIAL_CLASS, 'bg-white border-solid border-b border-black transition-colors delay-75 ease'));
      } else {
        setMergedClass(INITIAL_CLASS);
      }
    }

    return () => window.onscroll = null;
  }, []);

  return (
    <nav className={mergedClass}>
      <Link href="/">jechel sanchez</Link>
      <button>+</button>
    </nav>
  );
}
 
export default Nav;