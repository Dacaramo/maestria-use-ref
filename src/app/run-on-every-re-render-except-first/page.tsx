'use client';

import { useEffect, useRef, useState } from 'react';

const page = () => {
  const [rerenderCount, setRerenderCount] = useState<number>(0);

  const isFirstRender = useRef<boolean>(true);

  const handleClickOnRerender = () => {
    setRerenderCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      console.log('Ejecutar algo');
    }
  });

  return (
    <button
      className='btn btn-sm btn-primary'
      onClick={handleClickOnRerender}
    >
      Volver a renderizar
    </button>
  );
};

export default page;
