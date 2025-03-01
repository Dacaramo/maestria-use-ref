'use client';

import { useRef, useState } from 'react';

const page = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const measure = () => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        className='w-[200px] h-[200px] bg-accent resize overflow-auto'
      >
        Mídeme
      </div>
      <button
        className='btn btn-sm btn-primary'
        onClick={measure}
      >
        Medir
      </button>
      <p>Ancho: {dimensions.width}px</p>
      <p>Alto: {dimensions.height}px</p>
    </div>
  );
};

export default page;
