import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const MobileSidebar = ({ open }: { open: boolean }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute top-0 left-0 h-screen w-full bg-black/90 pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex h-full w-full flex-col p-4">
            {[
              { href: '#', title: 'Work' },
              { href: '#', title: 'About' },
              { href: '#', title: 'Blog' },
              { href: '#', title: 'Contact' },
            ].map(({ href, title }) => (
              <Link
                key={title}
                href={href}
                className="flex items-center justify-between border-b border-[#808080] p-3"
              >
                <span className="font-bold">{title}</span>➢
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
