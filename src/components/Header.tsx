import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-3 py-5 lg:h-auto">
      <Link
        href="/"
        className="z-40 overflow-hidden rounded-full px-5 py-2.5 backdrop-blur-3xl"
      >
        <Image
          src="logo__light.svg"
          alt="xPixel Logo"
          width={95}
          height={18}
          unoptimized
          className="block dark:hidden"
        />
        <Image
          src="logo__dark.svg"
          alt="xPixel Logo"
          width={95}
          height={18}
          unoptimized
          className="hidden dark:block"
        />
      </Link>

      <nav className="hidden items-center gap-10 rounded-full border border-black/5 bg-white/70 py-1.5 pr-1.5 pl-12 backdrop-blur-3xl lg:flex dark:border-white/5 dark:bg-white/5">
        <Link href="#">Work</Link>
        <Link href="#">About</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
        <button className="rounded-full px-6 py-4 text-sm dark:bg-white dark:text-black">
          X PIXEL 시작하기
        </button>
      </nav>

      <MobileNav />
    </header>
  );
};

export default Header;
