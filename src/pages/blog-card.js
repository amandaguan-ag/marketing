import BlogCard from "../components/BlogCard";

export default function BlogCardPage() {
  return (
    <main className="min-h-screen flex justify-center items-start">
      <div className="container mx-auto px-4 sm:px-8 md:px-32 lg:px-32 xl:px-32">
        <BlogCard
          title="Top 5 Living Room Inspirations"
          category="Interior"
          description="Curated vibrant colors for your living room, making it pop & calm at the same time."
          imageSrc="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
        />
      </div>
    </main>
  );
}
