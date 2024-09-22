export default function SeparatorLine({ className }) {
  return (
    <div aria-label="separator" className={`w-full min-h-[2px] my-2 rounded-full dark:bg-neutral-700 bg-neutral-200 ${className}`}></div>
  );
}