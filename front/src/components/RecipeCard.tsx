import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Card from '@/components/ui/Card/Card';

type Props = {
  label: string;
  imgSrc: string | StaticImageData;
};

function RecipeCard({ label, imgSrc }: Props) {
  return (
    <Card>
      <Image
        src={imgSrc}
        alt="레시피"
        style={{ height: 'fit-content', width: '100%', objectFit: 'contain' }}
        className="rounded-xl"
      />
      <span>{label}</span>
    </Card>
  );
}

export default RecipeCard;
