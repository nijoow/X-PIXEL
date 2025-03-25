'use client';
import React, { useEffect, useState } from 'react';
import MobileSidebar from './MobileSidebar';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClickButton = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // 스크롤 막기
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 허용
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시 복원
    };
  }, [open]);

  return (
    <>
      <button
        onClick={handleClickButton}
        className="relative z-40 flex flex-col items-center justify-between gap-2 rounded-full p-3 backdrop-blur-3xl lg:hidden"
      >
        {/* Top Line */}
        <motion.div
          className="h-1 w-8 rounded-full bg-white"
          animate={{
            rotate: open ? 135 : 0,
            y: open ? 12 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Middle Line (숨김 처리) */}
        <motion.div
          className="h-1 w-8 rounded-full bg-white"
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom Line */}
        <motion.div
          className="h-1 w-8 rounded-full bg-white"
          animate={{
            rotate: open ? -135 : 0,
            y: open ? -12 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </button>

      <MobileSidebar open={open} />
    </>
  );
};

export default MobileNav;
