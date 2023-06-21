import Image from 'next/image';
import Logo from '$/logos/main.png';
import IconBrown from '$/icons/main_brown.png';
import Avatar from '@/components/ui/Avatar';

export default function Navigation() {
  return (
    <nav className="flex h-16 w-full items-center border-b bg-white px-4 py-3">
      <Image
        src={Logo}
        alt="로고"
        // className="object-contain"
        style={{
          objectFit: 'contain',
          objectPosition: 'left center',
          height: '100%',
        }}
      />
      <Avatar src={IconBrown} alt="아바타" />
    </nav>
  );
}
