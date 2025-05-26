export default function NavItem({ label, tag, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap text-sm font-normal transition-all duration-300 px-3 py-2 rounded-md ${
        isActive
          ? "font-normal text-primary-700 dark:text-primary-400/75 [text-shadow:0_0_24px_currentColor]"
          : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:[text-shadow:0_0_24px_currentColor] hover:animate-none"
      }`}
    >
      {label}
      {tag && <span className="grayscale ml-2">{tag}</span>}
    </button>
  );
}
