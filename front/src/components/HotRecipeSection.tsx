import React from 'react';
import RecipeCard from '@/components/RecipeCard';
import RecipeImage from '$/temp/recipe.jpg';
import Section from '@/ui/Section/Section';

function HotRecipeSection() {
  return (
    <Section className="mt-1 h-52">
      <Section.Title>
        이주의{' '}
        <span className="font-pacifico text-base text-complementary-500">
          Ve green{' '}
        </span>
        레시피
      </Section.Title>
      <Section.List className="gap-x-3">
        {Array(10)
          .fill(0)
          .map(() => (
            <RecipeCard imgSrc={RecipeImage} label="라따뚜이" />
          ))}
      </Section.List>
    </Section>
  );
}

export default HotRecipeSection;
