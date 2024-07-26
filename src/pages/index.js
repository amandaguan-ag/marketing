import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center from-gray-50 to-[#d2d6db]">
      <nav>
        <ul className="list-none">
          <li className="mb-4">
            <Link href="/testimonial-card">Testimonial Card</Link>
          </li>
          <li className="mb-4">
            <Link href="/blog-card">Blog Card</Link>
          </li>
          <li className="mb-4">
            <Link href="/profile-card">Profile Card</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
