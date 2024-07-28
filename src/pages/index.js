import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <nav aria-label="Main navigation">
        <ul className="list-none">
          <li className="mb-4">
            <Link
              href="/testimonial-card"
              aria-label="Navigate to Testimonial Card page"
            >
              Testimonial Card
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/blog-card" aria-label="Navigate to Blog Card page">
              Blog Card
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/profile-card"
              aria-label="Navigate to Profile Card page"
            >
              Profile Card
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/hero-simple" aria-label="Navigate to Hero Simple page">
              Hero Simple
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
