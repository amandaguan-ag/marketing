import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialCardPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <div
        className="flex flex-col items-center"
        style={{
          marginTop: "200px",
          marginBottom: "335px",
          marginLeft: "550px",
          marginRight: "550px",
        }}
      >
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
    </div>
  );
}
