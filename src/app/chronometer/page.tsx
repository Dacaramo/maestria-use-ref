'use client';

import React, { useRef, useState } from 'react';

const page = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
  };

  return (
    <div className='flex flex-col gap-2 w-fit'>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button
        className='btn btn-sm btn-primary'
        onClick={handleStart}
      >
        Start
      </button>
      <button
        className='btn btn-sm btn-primary'
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
};

export default page;
