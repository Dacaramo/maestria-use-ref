'use client';

import { useEffect, useRef, useState } from 'react';

const page = () => {
  const prevScrollY = useRef<number>(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection('up');
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative flex flex-col gap-2'>
      {[...new Array(20)].map((_, i) => {
        return (
          <div
            key={i}
            className='w-[200px] h-[200px] bg-primary text-3xl text-black'
          >
            {i}
          </div>
        );
      })}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          fontWeight: 'bold',
          opacity: scrollDirection ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {scrollDirection === 'down'
          ? '⬇️'
          : scrollDirection === 'up'
          ? '⬆️'
          : ''}
      </div>
    </div>
  );
};

export default page;
