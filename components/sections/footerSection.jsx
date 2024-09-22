export default function FooterSection({ def, data }) {
  return (
    <h2 className="mx-auto text-sm text-center text-gray-400 dark:text-neutral-400 mt-8 pb-6">
      2024 ©️ {data?.intro?.name || def.intro.name}
    </h2>
  );
}