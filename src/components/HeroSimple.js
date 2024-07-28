import PropTypes from "prop-types";
import Image from "next/image";

const HeroSimple = ({ title, description, imageSrc }) => {
  return (
    <section
      className="bg-white rounded-2xl p-6 md:p-8 mx-auto my-4"
      aria-labelledby="hero-heading"
    >
      <div className="lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2">
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
            <button className="flex justify-center items-center gap-2.5 bg-white px-6 py-4 rounded border border-neutral-200 text-lg text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Learn more
            </button>
            <button className="flex justify-center items-center gap-2.5 bg-indigo-700 px-6 py-4 rounded text-white text-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              See pricing
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
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
};

export default HeroSimple;
