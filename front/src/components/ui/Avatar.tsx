import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt: string;
};

function Avatar({ src, alt }: Props) {
  return (
    <div className="aspect-square h-full rounded-full bg-gray-300 p-1.5">
      <Image
        src={src}
        alt={alt}
        style={{
          height: '100%',
          objectPosition: 'center',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default Avatar;
