import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Card from '@/ui/Card/Card';

type Props = {
  label: string;
  imgSrc: string | StaticImageData;
};

function RestaurantCard({ imgSrc, label }: Props) {
  return (
    <Card className="w-2/5">
      <Image
        src={imgSrc}
        alt="레시피"
        style={{ height: '80%', width: 'fit-content', objectFit: 'cover' }}
        className="rounded-xl"
      />
      <span>{label}</span>
    </Card>
  );
}

export default RestaurantCard;
