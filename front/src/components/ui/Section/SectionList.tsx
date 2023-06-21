import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function SectionList({ children, className = '' }: Props) {
  return (
    <ul
      className={clsx(
        'z-10 flex w-full flex-1 items-center overflow-x-auto scrollbar-hide',
        className,
      )}
    >
      {children}
    </ul>
  );
}

export default SectionList;
