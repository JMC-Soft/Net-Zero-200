import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};
function Card({ children, className = 'w-[25%]' }: Props) {
  return (
    <li
      className={clsx(
        'flex h-full flex-shrink-0 flex-grow-0 flex-col items-center justify-around',
        className,
      )}
    >
      {children}
    </li>
  );
}

export default Card;
