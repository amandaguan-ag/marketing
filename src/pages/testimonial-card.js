import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialCardPage() {
  return (
    <div className="container">
      <TestimonialCard
        author="Sarah Dole"
        handle="@sarahdole"
        blurb="I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety
        and depth of creativity are astounding!"
        imageSrc="/profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
      />
    </div>
  );
}
