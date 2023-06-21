import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  alt: string;
};

function Avatar({ src, alt }: Props) {
  return (
    <div className="h-12 rounded-full bg-gray-200 p-3">
      <Image
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default Avatar;
