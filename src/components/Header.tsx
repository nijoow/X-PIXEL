import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-3 py-5 lg:h-auto">
      <Link
        href="/"
        className="z-40 overflow-hidden rounded-full bg-black/30 px-5 py-2.5 backdrop-blur-3xl"
      >
        <Image
          src="logo__dark.svg"
          alt="xPixel Logo"
          width={95}
          height={18}
          unoptimized
        />
      </Link>

      <nav className="hidden items-center gap-10 rounded-full border border-white/5 bg-white/5 py-1.5 pr-1.5 pl-12 backdrop-blur-3xl lg:flex">
        {[
          { href: '#', title: 'Work' },
          { href: '#', title: 'About' },
          { href: '#', title: 'Blog' },
          { href: '#', title: 'Contact' },
        ].map(({ href, title }) => (
          <Link key={title} href={href}>
            <span className="font-medium">{title}</span>
          </Link>
        ))}
        <button className="rounded-full bg-white px-6 py-4 text-sm font-medium text-black">
          X PIXEL 시작하기
        </button>
      </nav>

      <MobileNav />
    </header>
  );
};

export default Header;
