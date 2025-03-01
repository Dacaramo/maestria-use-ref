'use client';

import { useRef, useState } from 'react';

const page = () => {
  const [rerenderCount, setRerenderCount] = useState<number>(0);

  const clickCountRef = useRef<number>(0);

  let clickCount = 0;

  const handleClickOnRerender = () => {
    setRerenderCount((prev) => prev + 1);
  };

  const handleClickOnIncrement = () => {
    clickCountRef.current += 1;
    clickCount += 1;
    alert(
      `clickCountRef.current = ${clickCountRef.current}\nclickCount = ${clickCount}`
    );
  };

  return (
    <div className='flex flex-col gap-2'>
      <button
        className='btn btn-sm btn-primary'
        onClick={handleClickOnRerender}
      >
        Volver a renderizar
      </button>
      <button
        className='btn btn-sm btn-primary'
        onClick={handleClickOnIncrement}
      >
        Me has dado click {clickCountRef.current} veces
      </button>
    </div>
  );
};

export default page;
