'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CharacterDirection } from '@/components/Character/typing';
import Ilbuni from '@/app/3D-Wall/components/Ilbuni';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

type CharacterType = {
  id: number;
  startX: number;
  direction: CharacterDirection;
};

function Stage({ children }: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [direction, setDirection] = useState<CharacterDirection>('front');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setDirection('front');
      } else if (e.key === 'ArrowDown') {
        setDirection('back');
      } else if (e.key === 'ArrowLeft') {
        setDirection('left');
      } else if (e.key === 'ArrowRight') {
        setDirection('right');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (stage) {
      const { x, y } = mousePos;
      const xMove = x / window.innerWidth - 0.5;
      const yMove = y / window.innerHeight - 0.5;
      stage.style.transform = `rotateX(${yMove * 10}deg) rotateY(${
        xMove * 10
      }deg)`;
    }
  }, [mousePos]);

  const addCharacter = (e: React.MouseEvent) => {
    const newCharacter = {
      id: characters.length,
      startX: (e.clientX / window.innerWidth) * 100,
      direction,
    };

    setCharacters([...characters, newCharacter]);
  };

  return (
    <div
      role="presentation"
      ref={stageRef}
      onClick={addCharacter}
      className="preserve-3d absolute left-0 top-0 h-screen w-screen"
    >
      {children}
      {characters.map(({ id, startX }) => (
        <Ilbuni key={id} startX={startX} direction={direction} />
      ))}
    </div>
  );
}

export default Stage;
