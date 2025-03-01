'use client';

import { useRef, useEffect } from 'react';

const page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type='text'
      placeholder='Escribe algo...'
    />
  );
};

export default page;
