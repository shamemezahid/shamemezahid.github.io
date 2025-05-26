export default function CoolStuffContent({ data }) {
  return (
    <div className="mx-4 sm:mx-6 h-full bg-black/5 dark:bg-white/5 rounded-3xl py-32 animate-fadeIn text-center text-sm text-neutral-600 dark:text-neutral-400">
      {data?.crafts?.cool_stuff?.empty_state}
    </div>
  );
}
