import PropTypes from "prop-types";
import Image from "next/image";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiTwitterFill,
} from "@remixicon/react";
import Button from "./Button";

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
        <Button
          type="primary"
          href={`mailto:${socialLinks.email}`}
          ariaLabel="Contact me"
        >
          Contact me
        </Button>
        <div className="flex justify-center gap-4 self-stretch">
          {socialLinks.github && (
            <Button
              type="icon-only"
              href={socialLinks.github}
              ariaLabel="GitHub"
              isIconOnly
            >
              <RiGithubFill className="w-5 h-5" />
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button
              type="icon-only"
              href={socialLinks.linkedin}
              ariaLabel="LinkedIn"
              isIconOnly
            >
              <RiLinkedinBoxFill className="w-5 h-5" />
            </Button>
          )}
          {socialLinks.instagram && (
            <Button
              type="icon-only"
              href={socialLinks.instagram}
              ariaLabel="Instagram"
              isIconOnly
            >
              <RiInstagramLine className="w-5 h-5" />
            </Button>
          )}
          {socialLinks.twitter && (
            <Button
              type="icon-only"
              href={socialLinks.twitter}
              ariaLabel="Twitter"
              isIconOnly
            >
              <RiTwitterFill className="w-5 h-5" />
            </Button>
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
