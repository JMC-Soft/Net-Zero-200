import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return <h1 className="flex  py-1.5 text-sm font-black">{children}</h1>;
}
