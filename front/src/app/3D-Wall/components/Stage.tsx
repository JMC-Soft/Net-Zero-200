'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Stage({ children }: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <div
      ref={stageRef}
      className="preserve-3d absolute left-0 top-0 h-screen w-screen"
    >
      {children}
    </div>
  );
}

export default Stage;
