import React from 'react';
import { SkillsSection } from '@/components/drawers/skillsDrawer';

export default function Skills({ def, data }) {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Skills</h2>
      <SkillsSection data={data || def} />
    </section>
  );
}
