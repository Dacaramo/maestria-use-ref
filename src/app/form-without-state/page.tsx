'use client';

import { useRef, FormEvent } from 'react';

const page = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    alert(`Nombre: ${name}\nEmail: ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2'
    >
      <div className='flex flex-col'>
        <label htmlFor='name'>Nombre:</label>
        <input
          type='text'
          id='name'
          ref={nameRef}
          className='input input-sm'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          ref={emailRef}
          className='input input-sm'
        />
      </div>
      <button
        type='submit'
        className='btn btn-sm btn-primary'
      >
        Enviar
      </button>
    </form>
  );
};

export default page;
