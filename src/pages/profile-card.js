import ProfileCard from "../components/ProfileCard";

export default function ProfileCardPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center">
      <div className="h-[200px]"></div>{" "}
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
      <div className="flex-grow"></div>
    </main>
  );
}
