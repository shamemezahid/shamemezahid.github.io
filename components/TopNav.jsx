export default function TopNave() {
  return (
    <nav className="w-full p-4 shadow-sm sticky top-0 bg-white z-99">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center px-4 sm:px-6">
        <p className="text-sm text-sky-900 font-semibold text-center opacity-75">
          shamemezahid
        </p>
        <div className="flex gap-4 flex-wrap">
          <p className="text-sm text-sky-950 px-6 py-2 bg-sky-50 rounded-md">Projects</p>
          <p className="text-sm text-sky-950 px-6 py-2 bg-sky-50 rounded-md">Posts</p>
          <p className="text-sm text-sky-950 px-6 py-2 bg-sky-50 rounded-md">About</p>
          <p className="text-sm text-sky-950 px-6 py-2 bg-sky-50 rounded-md">Resume</p>
          <p className="text-sm text-sky-950 px-6 py-2 bg-sky-50 rounded-md">Contact</p>
        </div>
      </div>
    </nav>
  );
}
