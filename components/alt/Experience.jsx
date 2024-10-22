import React from 'react';
import { ExperiencesSection } from '@/components/drawers/experiencesDrawer';

export default function Experience({ def, data }) {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Experience</h2>
      <ExperiencesSection data={data || def} />
    </section>
  );
}
