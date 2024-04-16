'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const INITIAL_CLASS = 'flex justify-between px-[15px] md:px-[35px] 12xl:px-[60px] py-3 12xl:py-5 transition-colors delay-75 ease-out font-light text-base md:text-lg 12xl:text-4xl sticky top-0 z-50';

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
      <div className="inline-flex gap-4">
        <Link href="/about-me">More About Me</Link>
        {/* <Link href="/">Contact</Link> */}
      </div>
      {/* <button>+</button> */}
    </nav>
  );
}
 
export default Nav;