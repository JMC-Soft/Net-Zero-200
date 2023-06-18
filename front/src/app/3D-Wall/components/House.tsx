'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function House({ children }: Props) {
  const houseRef = useRef<HTMLDivElement | null>(null);
  const [scrollYPos, setScrollYPos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [maxScrollValue, setMaxScrollValue] = useState(0);

  useEffect(() => {
    setScrollYPos(window.scrollY);
    setMaxScrollValue(document.body.offsetHeight - window.innerHeight);
    setIsLoading(false);

    const handleScroll = () => {
      const currentScrollYPos = window.scrollY;
      setScrollYPos(currentScrollYPos);
    };

    const handleResize = () => {
      setMaxScrollValue(document.body.offsetHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const house = houseRef.current;
    if (house) {
      const scrollPer = window.scrollY / maxScrollValue;
      const zMove = scrollPer * 980 - 490;
      house.style.transform = `translateZ(${zMove}vw)`;
    }
  }, [scrollYPos, maxScrollValue]);

  if (isLoading) {
    return null;
  }

  return (
    <div ref={houseRef} className="preserve-3d h-screen w-screen">
      {children}
    </div>
  );
}
