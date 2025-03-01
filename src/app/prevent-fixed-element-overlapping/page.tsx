'use client';

import React, { useRef, useEffect, useState } from 'react';

const page = () => {
  const fixedDivRef = useRef<HTMLDivElement | null>(null);
  const [marginBottom, setMarginBottom] = useState<number>(0);

  useEffect(() => {
    const fixedDiv = fixedDivRef.current;

    if (!fixedDiv) return;

    const resizeObserver = new ResizeObserver(() => {
      const fixedDivHeight = fixedDiv.getBoundingClientRect().height;
      setMarginBottom(fixedDivHeight + 20);
    });

    resizeObserver.observe(fixedDiv);

    return () => {
      resizeObserver.unobserve(fixedDiv);
    };
  }, []);

  return (
    <div>
      <div
        className='flex flex-col gap-[20px]'
        style={{
          marginBottom: `${marginBottom}px`,
        }}
      >
        {[...new Array(20)].map((_, i) => (
          <div
            className='w-[200px] h-[200px] bg-primary text-3xl text-black'
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div
        ref={fixedDivRef}
        className='fixed bottom-0 left-0 w-full flex flex-row flex-wrap gap-[20px] p-10 bg-secondary'
      >
        {[...new Array(20)].map((_, i) => {
          return (
            <div
              key={i}
              className='bg-accent p-2'
            >
              Content
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
