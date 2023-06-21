'use client';

import {
  ClipboardIcon,
  DocumentTextIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const NAV_LINKS = [
  {
    href: '#',
    Icon: HomeIcon,
    label: '홈',
  },
  {
    href: '#',
    Icon: DocumentTextIcon,
    label: '레시피',
  },
  {
    href: '#',
    Icon: ClipboardIcon,
    label: '식당 검색',
  },
  {
    href: '#',
    Icon: MagnifyingGlassIcon,
    label: '음식 검색',
  },
];

export default function AppBar() {
  return (
    <ul className="fixed bottom-0 flex w-full border-t bg-white ">
      {NAV_LINKS.map(({ href, Icon, label }) => (
        <Link
          href={href}
          key={label}
          className="flex h-16 flex-1 flex-col items-center justify-evenly text-sm"
        >
          <Icon className="h-7" />
          <span>{label}</span>
        </Link>
      ))}
    </ul>
  );
}
