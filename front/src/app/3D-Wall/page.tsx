import React from 'react';
import Wall from '@/app/3D-Wall/components/Wall';
import House from '@/app/3D-Wall/components/House';
import Stage from '@/app/3D-Wall/components/Stage';

function Page() {
  return (
    <div className="h-[500vw]">
      <div className="perspective-1000 fixed left-0 top-0 h-screen w-screen bg-primary">
        <Stage>
          <House>
            <Wall direction="left" />
            <Wall direction="right" />
            <Wall className="translate-z-300">안녕</Wall>
            <Wall className="translate-z-50">dsadf</Wall>
            <Wall className="-translate-z-200">aaa</Wall>
            <Wall className="-translate-z-500">123</Wall>
          </House>
        </Stage>
      </div>
    </div>
  );
}

export default Page;
