import React from 'react';
import clsx from 'clsx';
import SectionTitle from '@/components/ui/Section/SectionTitle';
import SectionList from '@/components/ui/Section/SectionList';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className = '' }: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-around bg-white py-3 pl-4 pr-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

Section.Title = SectionTitle;
Section.List = SectionList;

export default Section;
