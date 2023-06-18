import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

function Part({ className = '', children }: Props) {
  return (
    <div className={clsx('preserve-3d absolute duration-1000', className)}>
      {children}
    </div>
  );
}

type BackProps = {
  className?: string;
  src: string | StaticImageData;
};

function FrontImage({ className = '', src }: BackProps) {
  return (
    <Image
      src={src}
      alt="front"
      className={clsx(
        'backface-hidden absolute left-0 top-0 h-full w-full object-cover',
        className,
      )}
    />
  );
}

function BackImage({ className = '', src }: BackProps) {
  return (
    <Image
      src={src}
      alt="back"
      className={clsx(
        'backface-hidden rotate-y-180 absolute left-0 top-0 h-full w-full object-cover',
        className,
      )}
    />
  );
}

Part.Front = FrontImage;
Part.Back = BackImage;

export default Part;
