import Link from 'next/link';

export default function Home() {
  const btnClasses = 'btn btn-sm btn-primary';
  const h2Classes = 'text-lg italic';

  return (
    <>
      <h1 className='text-5xl font-bold'>EJEMPLOS</h1>
      <Link
        className={`${btnClasses}`}
        href='/how-it-works'
      >
        Cómo funciona useRef?
      </Link>
      <div className='divider' />
      <h2 className={`${h2Classes}`}>
        Forma 1: Usarlo sin vincularlo a un elemento del DOM
      </h2>
      <div className='flex flex-row flex-wrap gap-2 justify-center items-center'>
        <fieldset className='flex flex-row flex-wrap gap-2 justify-center items-center border border-primary p-2'>
          <legend>Casos básicos</legend>
          <Link
            className={`${btnClasses}`}
            href='/how-it-works'
          >
            1. Conservar valor entre re-renders
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/run-on-every-re-render-except-first'
          >
            2. Ejecutar algo excepto en el primer render
          </Link>
        </fieldset>
        <fieldset className='flex flex-row flex-wrap gap-2 justify-center items-center border border-primary p-2'>
          <legend>Valores previos</legend>
          <Link
            className={`${btnClasses}`}
            href='/history-of-changes'
          >
            3. Historial de cambios
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/scroll-direction-indicator'
          >
            4. Identificar dirección de scroll
          </Link>
        </fieldset>
        <fieldset className='flex flex-row flex-wrap gap-2 justify-center items-center border border-primary p-2'>
          <legend>Con tiempo</legend>
          <Link
            className={`${btnClasses}`}
            href='/chronometer'
          >
            5. Cronómetro
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/typing-indicator'
          >
            6. Identificar cuando alguien está escribiendo
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/auto-saving'
          >
            7. Auto-saving
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/detecting-inactivity'
          >
            8. Detectar inactividad
          </Link>
          <Link
            className={`${btnClasses}`}
            href='/temporal-notification'
          >
            9. Notificación temporal
          </Link>
        </fieldset>
      </div>
      <div className='divider' />
      <h2 className={`${h2Classes}`}>
        Forma 2: Usarlo vinculándolo a un elemento del DOM
      </h2>
      <div className='flex flex-row flex-wrap gap-2 justify-center items-center mb-[250px]'>
        <Link
          className={`${btnClasses}`}
          href='/cursor-trail'
        >
          10. Cursor con rastro
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/html-canvas'
        >
          10. HTML Canvas
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/control-playback'
        >
          11. Controlar playback
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/focus-on-mount'
        >
          12. Enfocar elemento on-mount
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/measure-element'
        >
          13. Obtener dimensiones de elemento
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/imperative-animations'
        >
          14. Animaciones imperativas
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/prevent-fixed-element-overlapping'
        >
          15. Prevenir que un elemento fijo tape otros elementos de la pantalla
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/form-without-state'
        >
          16. Formulario sin estado
        </Link>
        <Link
          className={`${btnClasses}`}
          href='/integrate-with-third-libs'
        >
          17. Integración con librerías de terceros
        </Link>
      </div>
    </>
  );
}
