import ProfileCard from "../components/ProfileCard";

export default function ProfileCardPage() {
  return (
    <main className="min-h-screen flex justify-center items-center from-gray-50 to-[#d2d6db]">
      <ProfileCard
        name="Sarah Dole"
        position="Front End Engineer @ Microsoft"
        description="I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
        imageSrc="/profile.png"
        alt="Headshot of Sarah Dole"
      />
    </main>
  );
}
