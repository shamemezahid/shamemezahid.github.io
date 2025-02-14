export default function SectionWithTitle({ pagetitle, content }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        {pagetitle}
      </h2>
      {content} 
    </div>
  );
}
