import Link from "next/link";

export default function FooterSection({ data }) {
  return (
    <div className="flex flex-wrap gap-4 mx-auto text-sm text-center align-baseline items-center text-neutral-400 dark:text-neutral-500 mt-8 pb-6">
      <h2 className="">2024 © {data?.intro?.name}</h2>
      {/* <div className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-700"/> */}
      {/* <Link href="/404">404</Link> */}
    </div>
  );
}
