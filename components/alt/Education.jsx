import React from 'react';
import { EducationSection } from '@/components/drawers/educationDrawer';

export default function Education({ def, data }) {
  return (
    <section id="education" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Education</h2>
      <EducationSection data={data || def} />
    </section>
  );
}
