import React from 'react';
import { ResearchSection } from '@/components/drawers/researchDrawer';

export default function Research({ def, data }) {
  return (
    <section id="research" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Research</h2>
      <ResearchSection data={data || def} />
    </section>
  );
}
