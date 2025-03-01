'use client';

import { useEffect, useRef, useState } from 'react';

const page = () => {
  const [text, setText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const lastTypedTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastTypedTimeRef.current > 2000) {
        setIsTyping(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setIsTyping(true);
    lastTypedTimeRef.current = Date.now();
  };

  return (
    <div>
      <input
        type='text'
        className='input input-sm'
        value={text}
        onChange={handleChange}
      />
      {isTyping === true && <p>Escribiendo...</p>}
    </div>
  );
};

export default page;
