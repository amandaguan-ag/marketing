import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center from-gray-50 to-[#d2d6db]">
      <nav aria-label="Main navigation">
        <ul className="list-none">
          <li className="mb-4">
            <Link href="/testimonial-card">
              <a aria-label="Navigate to Testimonial Card page">
                Testimonial Card
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/blog-card">
              <a aria-label="Navigate to Blog Card page">Blog Card</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/profile-card">
              <a aria-label="Navigate to Profile Card page">Profile Card</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
