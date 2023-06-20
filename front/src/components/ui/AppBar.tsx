'use client';

import {
  ClipboardIcon,
  DocumentTextIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { Navbar } from 'flowbite-react';

const NAV_LINKS = [
  {
    href: '#',
    icon: <HomeIcon className="w-8" />,
    label: '홈',
  },
  {
    href: '#',
    icon: <DocumentTextIcon className="w-8" />,
    label: '레시피',
  },
  {
    href: '#',
    icon: <ClipboardIcon className="w-8" />,
    label: '식당 검색',
  },
  {
    href: '#',
    icon: <MagnifyingGlassIcon className="w-8" />,
    label: '음식 검색',
  },
];

export default function AppBar() {
  return (
    <Navbar fluid rounded className="mt-auto">
      {NAV_LINKS.map(({ href, icon, label }) => (
        <div className="w-1/4">
          <Navbar.Link
            key={label}
            href={href}
            className="flex flex-col items-center gap-y-2 text-sm"
          >
            {icon}
            <span>{label}</span>
          </Navbar.Link>
        </div>
      ))}
    </Navbar>
  );
}
