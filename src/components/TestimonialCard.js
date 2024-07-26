import Image from "next/image";
import PropTypes from "prop-types";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

const TestimonialCard = ({ author, handle, blurb, imageSrc, imageAlt }) => {
  return (
    <section
      className={`${notoSans.className} bg-white p-6 rounded-lg w-[340px] text-neutral-600 flex flex-col gap-4 shadow-md mx-auto mt-[200px]`}
      role="complementary"
    >
      <header className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={48}
          height={48}
          className="rounded-full"
          priority={true}
        />
        <div className="flex flex-col gap-1 overflow-hidden">
          <h2 className="text-lg text-neutral-900 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {author}
          </h2>
          <p className="text-sm text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis">
            {handle}
          </p>
        </div>
      </header>
      <blockquote
        className="text-neutral-600 text-base overflow-hidden text-ellipsis"
        aria-label="testimonial"
      >
        <p>{blurb}</p>
      </blockquote>
    </section>
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
