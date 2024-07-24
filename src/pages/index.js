import Image from "next/image"; 

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <Image
            src="/profile-thumbnail.png" 
            alt="Profile picture of Sarah Dole"
            width={48}
            height={48}
          />
        </div>
        <div>
          <span>Sarah Dole</span>
          <span>@sarahdole</span>
        </div>
      </div>
      <div>
        <span>
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </span>
      </div>
    </div>
  );
}
