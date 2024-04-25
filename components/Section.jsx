"use client";
export default function Section({ title, description }) {
  return (
    <div className="flex flex-col justify-start gap-2 p-4 rounded-xl bg-slate-50">
      <h2 className="text-base font-semibold text-gray-700">{title}</h2>
      <p className="text-sm text-gray-700 text text-justify">{description}</p>
    </div>
  );
}
