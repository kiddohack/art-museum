import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center h-screen w-full justify-center bg-bgColor">
      <div className="text-center">
        <h2>Not Found</h2>
        <p className="px-3 pb-5">Could not find requested resource</p>
        <Link
          href="/"
          className="bg-bgColorHeader px-4 py-2 rounded text-white no-underline"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
