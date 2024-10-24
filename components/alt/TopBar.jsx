import React from 'react';
import Link from 'next/link';

const sections = ['About', 'Experience', 'Skills', 'Education', 'Research', 'Contact'];

export default function TopBar() {
  return (
    <nav className="sticky top-4 z-10">
      <ul className="flex justify-around p-4 max-w-6xl mx-auto">
        {sections.map((section) => (
          <li key={section}>
            <Link href={`#${section.toLowerCase()}`} className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200">
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
