export default function QuoteSection({ data }) {
  return (
    <p className="p-4 text-sm font-medium text-colors text-left sm:text-justify">
      {data?.intro?.quote}
    </p>
  );
}