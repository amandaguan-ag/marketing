import Image from "next/image";
import PropTypes from "prop-types";

const TestimonialCard = ({ author, handle, blurb, imageSrc, imageAlt }) => {
  return (
    <div className="h-[233px] w-[340px] flex flex-col justify-center gap-4 bg-white p-6 rounded-lg ring-1 ring-neutral-200 shadow-md">
      <div className="flex justify-center items-center gap-4 w-full">
        <div className="w-12 h-12">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-semibold text-lg text-neutral-900">
            {author}
          </span>
          <span className="font-normal text-sm text-neutral-600">{handle}</span>
        </div>
      </div>
      <div className="flex justify-center gap-2 w-full rounded-lg">
        <span className="font-normal text-base text-neutral-600">{blurb}</span>
      </div>
    </div>
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
