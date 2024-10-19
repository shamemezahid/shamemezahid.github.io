export default function AboutSection({ def, data }) {
  return (
    <div className="text-sm flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-neutral-500 dark:text-neutral-400">
        {data?.about?.label || def.about.label}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-200 text text-left sm:text-justify">
        {data?.about?.value || def.about.value}
      </p>
    </div>
  );
}