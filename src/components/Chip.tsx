import { cn } from '@/utils/cn';
import React from 'react';

const Chip = ({ color = 'white' }: { color?: 'white' | 'black' }) => {
  return (
    <div
      className={cn('rounded-full px-4 py-2 @sm:px-5 @sm:py-2.5', {
        'bg-white': color === 'white',
        'bg-[#202020]': color === 'black',
      })}
    >
      <span
        className={cn('text-sm', {
          'text-[#101010]': color === 'white',
          'text-[#808080]': color === 'black',
        })}
      >
        #Nocode
      </span>
    </div>
  );
};

export default Chip;
