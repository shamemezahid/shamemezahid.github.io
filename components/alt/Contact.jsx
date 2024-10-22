import React from 'react';
import { FormComponent } from '@/components/drawers/contactDrawer';
import { ClickToReveal } from '@/components/utils/clickToReveal';

export default function Contact({ def, data }) {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Contact</h2>
      <div className="mb-4">
        <ClickToReveal content={data?.actions?.contact?.address || def.actions.contact.address} />
      </div>
      <FormComponent />
    </section>
  );
}
