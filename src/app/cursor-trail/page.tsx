'use client';

import { useEffect, useRef } from 'react';

const page = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className='fixed left-0 top-0 w-[50px] h-[50px] bg-primary rounded-full pointer-events-none'
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default page;
