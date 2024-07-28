import PropTypes from "prop-types";
import Image from "next/image";

const HeroSimple = ({ title, description, imageSrc }) => {
  return (
    <section
      className="flex flex-col py-16"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-gray-50 to-[#edf0f3] py-8 px-6 rounded-lg shadow-md">
          <div className="flex flex-col items-start lg:w-1/2 lg:pr-8">
            <h1
              id="hero-heading"
              className="font-semibold text-4xl lg:text-6xl text-neutral-900 mb-4"
            >
              {title}
            </h1>
            <p className="font-normal text-lg lg:text-xl text-neutral-600 mb-8">
              {description}
            </p>
            <div className="flex gap-4">
              <button className="flex justify-center items-center gap-2.5 bg-white px-6 py-4 rounded border border-neutral-200 text-lg text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Learn more
              </button>
              <button className="flex justify-center items-center gap-2.5 bg-indigo-700 px-6 py-4 rounded text-white text-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                See pricing
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src={imageSrc}
              alt="Hero Image"
              className="object-cover rounded-2xl"
              width={600}
              height={400}
              layout="responsive"
              priority
            />
          </div>
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
