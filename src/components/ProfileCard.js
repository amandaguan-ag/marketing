import Image from "next/image";
import PropTypes from "prop-types";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const ProfileCard = ({ name, position, description, imageSrc, alt }) => {
  return (
    <div className="w-[340px] flex flex-col items-center gap-10 bg-white px-4 py-6 rounded-lg shadow-md mx-auto mt-[200px]">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="w-16 h-16">
          <Image
            src={imageSrc}
            alt={alt}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 self-stretch">
          <span className="font-medium text-xl text-center text-neutral-900">
            {name}
          </span>
          <span className="font-normal text-sm text-center text-neutral-600">
            {position}
          </span>
        </div>
        <span className="font-normal text-base text-center text-neutral-600">
          {description}
        </span>
      </div>
      <div className="flex flex-col gap-6 self-stretch">
        <div className="flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded">
          <div className="flex justify-center items-center px-0.5">
            <span className="font-medium text-base text-white">Contact me</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 self-stretch">
          <div className="flex justify-center items-center gap-2 p-2 rounded">
            <div className="w-5 h-5">
              <RiGithubFill className="text-indigo-700 w-5 h-5" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 rounded">
            <div className="w-5 h-5">
              <RiLinkedinFill className="text-indigo-700 w-5 h-5" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 rounded">
            <div className="w-5 h-5">
              <RiInstagramFill className="text-indigo-700 w-5 h-5" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 rounded">
            <div className="w-5 h-5">
              <RiTwitterFill className="text-indigo-700 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProfileCard;
