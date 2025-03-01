'use client';

import { useRef, useState } from 'react';

const page = () => {
  const [message, setMessage] = useState<string>('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = () => {
    setMessage('Esto desaparecerá en 3 segundos! 🔥');
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setMessage(''), 3000);
  };

  return (
    <>
      <button
        className='btn btn-sm btn-primary'
        onClick={showNotification}
      >
        Mostrar alerta
      </button>
      {message && (
        <div className='toast toast-top'>
          <div className='alert alert-success'>
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
