import Image from "next/image";
import PropTypes from "prop-types";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

const TestimonialCard = ({ author, handle, blurb, imageSrc, imageAlt }) => {
  return (
    <div
      className={`${notoSans.className} bg-white p-6 rounded-lg w-full max-w-md text-neutral-600 flex flex-col gap-4 shadow-md outline outline-1 outline-neutral-200`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col gap-1 overflow-hidden">
          <p className="text-lg text-neutral-900 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {author}
          </p>
          <p className="text-sm text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis">
            {handle}
          </p>
        </div>
      </div>
      <p className="text-neutral-600 text-base overflow-hidden text-ellipsis">
        {blurb}
      </p>
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
