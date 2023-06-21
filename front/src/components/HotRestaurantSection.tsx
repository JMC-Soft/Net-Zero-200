import React from 'react';
import Section from '@/components/ui/Section/Section';
import Restaurant from '$/temp/restaurant.jpg';
import RestaurantCard from '@/components/RestaurantCard';

function HotRestaurantSection() {
  return (
    <Section className="h-96">
      <Section.Title>
        주변 인기 비건 식당
        <span className="ml-auto self-end text-xs font-medium text-gray-500">
          더 많은 비건 식당 보러가기
        </span>
      </Section.Title>
      <Section.List className="gap-x-5">
        {Array(5)
          .fill(0)
          .map(() => (
            <RestaurantCard imgSrc={Restaurant} label="수잔네 허브식당" />
          ))}
      </Section.List>
    </Section>
  );
}

export default HotRestaurantSection;
