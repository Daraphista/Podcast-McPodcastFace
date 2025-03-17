import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-xl mx-auto py-16">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-8">
          We couldn't find the page you're looking for. It might have been
          moved, deleted, or never existed.
        </p>
        <Link href="/" className="button inline-block">
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
