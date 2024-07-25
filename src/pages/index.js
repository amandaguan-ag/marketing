import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <ul className="list-none">
        <li className="mb-4">
          <Link href="/testimonial-card">Testimonial Card</Link>
        </li>
      </ul>
    </main>
  );
}
