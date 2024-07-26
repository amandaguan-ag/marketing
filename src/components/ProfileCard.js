import Image from "next/image";
import PropTypes from "prop-types";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiTwitterFill,
} from "@remixicon/react";

const ProfileCard = ({
  name,
  title,
  description,
  imageSrc,
  imageAlt,
  socialLinks,
}) => {
  return (
    <section
      className="w-[340px] flex flex-col items-center gap-10 bg-white px-4 py-6 rounded-lg shadow-md mx-auto mt-[120px]"
      role="complementary"
    >
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="w-16 h-16">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-full"
            priority={true}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
          <span className="font-medium text-xl text-center text-neutral-900">
            {name}
          </span>
          <span className="font-normal text-sm text-center text-neutral-600">
            {title}
          </span>
        </div>
        <span className="font-normal text-base text-center text-neutral-600">
          {description}
        </span>
      </div>
      <div className="flex flex-col gap-6 self-stretch">
        <a
          href={`mailto:${socialLinks.email}`}
          className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Contact me"
        >
          Contact me
        </a>
        <div className="flex justify-center gap-4 self-stretch">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              className="flex justify-center items-center gap-2 p-2 rounded text-indigo-700"
              aria-label="GitHub"
            >
              <RiGithubFill className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              className="flex justify-center items-center gap-2 p-2 rounded text-indigo-700"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxFill className="w-5 h-5" />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              className="flex justify-center items-center gap-2 p-2 rounded text-indigo-700"
              aria-label="Instagram"
            >
              <RiInstagramLine className="w-5 h-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              className="flex justify-center items-center gap-2 p-2 rounded text-indigo-700"
              aria-label="Twitter"
            >
              <RiTwitterFill className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    email: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
