'use client';

import Image from 'next/image';
import Logo from '$/images/logos/main.png';
import IconBrown from '$/images/icons/main_brown.png';
import Avatar from '@/components/ui/Avatar';
import { Navbar } from 'flowbite-react';

export default function Navigation() {
  return (
    <Navbar fluid rounded className="m-2 border-b">
      <Navbar.Brand className="h-12">
        <Image
          src={Logo}
          alt="로고"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Navbar.Brand>
      <Avatar src={IconBrown} alt="아바타" />
    </Navbar>
  );
}
