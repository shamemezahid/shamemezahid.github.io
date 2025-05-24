export default function Tag({ children }) {
  return (
    <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
      {children}
    </span>
  );
}
