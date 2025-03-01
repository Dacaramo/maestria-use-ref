'use client';

import { useRef, useState, ChangeEvent } from 'react';

const page = () => {
  const historyRef = useRef<string[]>(['']);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const handleChangeOnText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    const newHistory = historyRef.current.slice(0, currentIndex + 1);
    newHistory.push(newText);
    historyRef.current = newHistory;
    setCurrentIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setText(historyRef.current[newIndex]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < historyRef.current.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setText(historyRef.current[newIndex]);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <textarea
        className='textarea textarea-bordered'
        value={text}
        onChange={handleChangeOnText}
      />
      <button
        className='btn btn-sm btn-primary'
        onClick={handleUndo}
        disabled={currentIndex === 0}
      >
        Undo
      </button>
      <button
        className='btn btn-sm btn-primary'
        onClick={handleRedo}
        disabled={currentIndex === historyRef.current.length - 1}
      >
        Redo
      </button>
    </div>
  );
};

export default page;
