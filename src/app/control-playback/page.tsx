'use client';

import { useRef } from 'react';

const page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width='400'
        controls
      >
        <source
          src='holaMundoEnBrainfuck.mp4'
          type='video/mp4'
        />
        Tu navegador no soporta el elemento de video.
      </video>
      <button
        className='btn btn-sm btn-primary'
        onClick={play}
      >
        Reproducir ▶️
      </button>
      <button
        className='btn btn-sm btn-primary'
        onClick={pause}
      >
        Pausar ⏸️
      </button>
    </div>
  );
};

export default page;
