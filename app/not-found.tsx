import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="text-gray-600 underline hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Back to home
      </Link>
    </main>
  );
}
