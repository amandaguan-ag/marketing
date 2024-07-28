import ProfileCard from "../components/ProfileCard";

export default function ProfileCardPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <ProfileCard
        name="Sarah Dole"
        title="Front End Engineer @ Microsoft"
        description="I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer."
        imageSrc="/profile-thumbnail.png"
        imageAlt="Headshot of Sarah Dole"
        socialLinks={{
          email: "",
          github: " ",
          linkedin: " ",
          instagram: " ",
          twitter: " ",
        }}
      />
    </main>
  );
}
