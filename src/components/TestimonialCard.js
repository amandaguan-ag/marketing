import Image from "next/image";
import PropTypes from "prop-types";

const TestimonialCard = ({ author, handle, blurb, imageSrc, imageAlt }) => {
  return (
    <figure className="bg-white p-6 flex flex-col gap-4 shadow-md rounded-lg w-[340px] text-base leading-6 text-gray-600">
      <figcaption className="flex gap-4 items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <div className="font-semibold text-lg leading-7 text-gray-900">
            {author}
          </div>
          <div className="font-normal text-sm leading-5 text-neutral-600">
            {handle}
          </div>
        </div>
      </figcaption>
      <blockquote>
        <p>{blurb}</p>
      </blockquote>
    </figure>
  );
};

TestimonialCard.propTypes = {
  author: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default TestimonialCard;
