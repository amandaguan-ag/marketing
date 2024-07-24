import Image from "next/image"; 

export default function Home() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">
          <Image
            src="/profile-thumbnail.png" 
            alt="Profile picture of Sarah Dole"
            width={48}
            height={48}
            className="avatar-image"
          />
        </div>
        <div className="user-info">
          <span className="user-name">Sarah Dole</span>
          <span className="user-handle">@sarahdole</span>
        </div>
      </div>
      <div className="card-content">
        <span className="card-text">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </span>
      </div>
    </div>
  );
}
