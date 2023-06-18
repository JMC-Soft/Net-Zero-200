import Link from 'next/link';
import Image from 'next/image';
import LJGImage from '$/images/ljg1.png';

const links = [
  {
    href: './3D-Wall',
    label: '준경소녀와 3D 벽',
    bgColorStart: 'bg-red-500',
    hoverColor: 'hover:bg-yellow-500',
  },
  {
    href: './card',
    label: '준경소녀와 카드',
    bgColorStart: 'bg-yellow-500',
    hoverColor: 'hover:bg-green-500',
  },
  {
    href: './mine',
    label: '준경 찾기',
    bgColorStart: 'bg-green-500',
    hoverColor: 'hover:bg-blue-500',
  },
  {
    href: './board',
    label: '준경이의 모험',
    bgColorStart: 'bg-blue-500',
    hoverColor: 'hover:bg-indigo-500',
  },
];

export default function Home() {
  return (
    <div className="mx-auto my-auto grid h-screen w-5/6 grid-cols-3">
      {links.map(({ href, label, bgColorStart, hoverColor }) => (
        <div
          key={href}
          className={`center relative m-12 border border-black ${bgColorStart} ${hoverColor} group transition-all duration-1000 `}
        >
          <Link href={href} className="center">
            <Image
              src={LJGImage}
              alt="우주최강 귀요미"
              className="absolute w-full object-contain object-center opacity-0 duration-[3000ms] group-hover:animate-spin group-hover:opacity-100"
            />
            <span className="text-center text-3xl transition-transform duration-1000 group-hover:scale-[2]">
              {label}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
