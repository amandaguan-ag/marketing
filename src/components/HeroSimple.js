import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const HeroSimple = ({ title, description, imageSrc }) => {
  return (
    <section
      className="bg-white rounded-2xl p-6 md:p-8 mx-auto my-4 flex"
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
            <Link href="">
              <Button type="secondary">Learn more</Button>
            </Link>
            <Link href="">
              <Button type="primary">See pricing</Button>
            </Link>
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
