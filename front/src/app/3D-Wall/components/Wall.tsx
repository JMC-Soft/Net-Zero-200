import React from 'react';
import clsx from 'clsx';

type Props = {
  direction?: 'left' | 'right' | 'front';
  className?: string;
  children?: string;
};

function Wall({ direction = 'front', className, children }: Props) {
  return (
    <section
      className={clsx(
        'center absolute left-0 top-0 flex h-screen bg-white text-9xl text-black',
        className,
        {
          'rotate-90--translate-z-500 w-[1000vw] bg-white/90 ':
            direction === 'left',
          'rotate-90--translate-z-400 w-[1000vw] bg-white/90':
            direction === 'right',
          'w-screen': direction === 'front',
        },
      )}
    >
      {children}
    </section>
  );
}

export default Wall;
