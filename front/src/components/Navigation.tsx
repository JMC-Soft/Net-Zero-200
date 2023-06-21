import Image from 'next/image';
import { BellIcon } from '@heroicons/react/24/outline';
import Logo from '$/logos/main.png';
import IconBrown from '$/icons/main_brown.png';
import Avatar from '@/ui/Avatar';

export default function Navigation() {
  return (
    <nav className="flex h-16 w-full items-center gap-x-3 bg-white px-4 py-3">
      <Image
        src={Logo}
        alt="로고"
        style={{
          objectFit: 'contain',
          objectPosition: 'left center',
          height: '100%',
          width: 'fit-content',
        }}
      />
      <BellIcon className="ml-auto w-8" />
      <Avatar src={IconBrown} alt="아바타" />
    </nav>
  );
}
