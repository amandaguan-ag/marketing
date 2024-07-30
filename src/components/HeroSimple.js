import PropTypes from "prop-types";
import Image from "next/image";
import Button from "../components/Button";

const HeroSimple = ({
  title,
  description,
  imageSrc,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <section
      className="bg-white rounded-2xl p-6 md:p-8 mx-auto m-4 flex w-full"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto grid gap-8 grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-5">
          <h1
            id="hero-heading"
            className="font-semibold text-4xl lg:text-6xl text-neutral-900 mb-4"
          >
            {title}
          </h1>
          <p className="font-normal text-lg lg:text-xl text-neutral-600 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button type="secondary" href={secondaryButtonHref}>
              {secondaryButtonText}
            </Button>
            <Button type="primary" href={primaryButtonHref}>
              {primaryButtonText}
            </Button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 mt-8 lg:mt-0">
          <Image
            src={imageSrc}
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-2xl"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

HeroSimple.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  primaryButtonHref: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  secondaryButtonHref: PropTypes.string.isRequired,
};

export default HeroSimple;
