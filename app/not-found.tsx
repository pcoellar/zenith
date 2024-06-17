import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">URL not found</h2>
      <p>Could not find the request, please check if the path is correct</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white w-60 h-12 transition-colors hover:bg-red-400 hover:text-sm hover:text-white text-center hover:h-12 justify-center items-center flex h-full"
      >
        Go to home
      </Link>
    </main>
  );
}