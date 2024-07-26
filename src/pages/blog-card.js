import BlogCard from "../components/BlogCard";

export default function BlogCardPage() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <div className="mt-[120px] mx-auto max-w-[1280px] px-8">
        <BlogCard
          title="Top 5 Living Room Inspirations"
          category="Interior"
          description="Curated vibrants colors for your living, make it pop & calm in the same time."
          imageSrc="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        />
      </div>
    </main>
  );
}
