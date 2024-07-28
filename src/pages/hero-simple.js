import HeroSimple from "../components/HeroSimple";

export default function HeroSimplePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <HeroSimple
        title="Well crafted abstract images"
        description="High quality abstract images for your projects, wallpaper and presentations."
        imageSrc="/prism.png"
      />
    </main>
  );
}
