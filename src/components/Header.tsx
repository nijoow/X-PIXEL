import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between py-5">
      <Link
        href="#home"
        className="overflow-hidden rounded-full px-5 py-2.5 backdrop-blur-3xl"
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
      <ul className="flex items-center gap-10 rounded-full border border-black/5 bg-white/70 py-1.5 pr-1.5 pl-12 backdrop-blur-3xl dark:border-white/5 dark:bg-white/5">
        <li>
          <Link href="#Work">Work</Link>
        </li>
        <li>
          <Link href="#About">About</Link>
        </li>
        <li>
          <Link href="#Blog">Blog</Link>
        </li>
        <li>
          <Link href="#Contact">Contact</Link>
        </li>
        <button className="rounded-full px-6 py-4 text-sm dark:bg-white dark:text-black">
          X PIXEL 시작하기
        </button>
      </ul>
    </header>
  );
};

export default Header;
