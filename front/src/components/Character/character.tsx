import React from 'react';
import clsx from 'clsx';

import Part from '@/components/Character/Part';
import { CharacterDirection } from '@/components/Character/typing';

type Props = {
  startX: number;
  children: React.ReactNode | React.ReactNode[];
  direction: CharacterDirection;
};

function Character({ startX, children, direction }: Props) {
  return (
    <div
      className={clsx('preserve-3d absolute bottom-[5%] h-[15.58vw] w-[10vw]', {
        'rotate-y-180': direction === 'back',
        'rotate-y-0': direction === 'front',
        'rotate-y-90': direction === 'right',
        '-rotate-y-90': direction === 'left',
      })}
      style={{ left: `${startX}%` }}
    >
      {children}
    </div>
  );
}

Character.Part = Part;
export default Character;
