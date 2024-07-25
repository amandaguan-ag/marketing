import Image from "next/image";
import styles from "../styles/TestimonialCard.module.css";

const TestimonialCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          <Image
            src="/profile-thumbnail.png"
            alt="Profile picture of Sarah Dole"
            width={48}
            height={48}
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Sarah Dole</span>
          <span className={styles.userHandle}>@sarahdole</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <span className={styles.cardText}>
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
