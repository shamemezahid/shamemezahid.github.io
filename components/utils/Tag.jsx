export default function Tag({ children }) {
  return (
    <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-3 py-2 rounded-full text-xs">
      {children}
    </span>
  );
}
