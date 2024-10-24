import React from 'react';
import AboutSection from '@/components/sections/aboutSection';

export default function About({ def, data }) {
  return (
    <section id="about" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">About</h2>
      <AboutSection def={def} data={data} />
    </section>
  );
}
