'use client';

import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

const page = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    setIsActive(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsActive(false), 3000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keydown', resetTimer);
    };
  }, []);

  return (
    <div
      className={cn('avatar', {
        online: isActive === true,
        offline: isActive === false,
      })}
    >
      <div className='w-24 rounded-full'>
        <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
      </div>
    </div>
  );
};

export default page;
