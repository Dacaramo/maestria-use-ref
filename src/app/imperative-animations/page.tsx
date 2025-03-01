'use client';

import React, { useRef, useEffect } from 'react';

const page = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationId: NodeJS.Timeout;

    const animate = () => {
      if (divRef.current) {
        const x = Math.random() * 200;
        const y = Math.random() * 200;

        divRef.current.style.transition = 'transform 1s ease-in-out';
        divRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      animationId = setTimeout(animate, 1000);
    };

    animate();

    return () => clearTimeout(animationId);
  }, []);

  return (
    <div
      ref={divRef}
      className='w-[50px] h-[50px] bg-accent'
    />
  );
};

export default page;
