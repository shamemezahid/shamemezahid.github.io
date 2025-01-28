export default function FooterSection({ data }) {
  return (
    <h2 className="mx-auto text-sm text-center align-baseline text-neutral-400 dark:text-neutral-400 mt-8 pb-6">
      2024 © {data?.intro?.name}
    </h2>
  );
}