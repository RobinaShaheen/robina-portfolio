import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6">

      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4 text-center max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Return Home
      </Link>

    </div>
  );
}