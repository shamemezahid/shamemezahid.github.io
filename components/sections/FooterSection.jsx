import Link from "next/link";

export default function FooterSection({ data }) {
  return (
    <span className="text-sm flex flex-wrap gap-4 mx-auto justify-center text-center align-baseline items-center text-neutral-400 dark:text-neutral-500 mt-8 pb-6">
      {new Date().getFullYear()} © {data?.intro?.name}
      {/* <div className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-700"/> */}
      {/* <Link href="/404">404</Link> */}
    </span>
  );
}
