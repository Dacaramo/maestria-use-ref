'use client';

import { useEffect, useRef, useState } from 'react';

const page = () => {
  const [text, setText] = useState<string>('');
  const saveIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedTextRef = useRef<string>('');

  const saveDraft = () => {
    if (text !== lastSavedTextRef.current) {
      alert('Auto saving...');
      lastSavedTextRef.current = text;
    }
  };

  useEffect(() => {
    saveIntervalRef.current = setInterval(() => {
      saveDraft();
    }, 3000);

    return () => {
      if (saveIntervalRef.current) clearInterval(saveIntervalRef.current);
    };
  }, [text]);

  return (
    <textarea
      className='textarea text-area'
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Start typing...'
    />
  );
};

export default page;
