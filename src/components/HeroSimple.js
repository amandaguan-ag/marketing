import PropTypes from "prop-types";
import Image from "next/image";

const HeroSimple = ({ title, description, imageSrc }) => {
  return (
    <div className="h-[768px] flex flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <div className="flex grow w-[1440px] p-4 mx-auto">
        <div className="flex flex-col justify-center self-stretch grow bg-gradient-to-b from-gray-50 to-[#edf0f3] py-2 rounded-md">
          <div className="flex flex-col self-stretch rounded-lg">
            <div className="flex justify-center items-center gap-8 self-stretch p-24">
              <div className="w-[488px] flex flex-col justify-center gap-16">
                <div className="flex flex-col justify-center gap-6 self-stretch">
                  <span className="font-semibold text-6xl text-neutral-900">
                    {title}
                  </span>
                  <span className="font-normal text-xl text-neutral-600">
                    {description}
                  </span>
                </div>
                <div className="w-[383px] flex gap-8">
                  <div className="flex justify-center items-center gap-2.5 grow bg-white px-6 py-4 rounded border-[0.5px] border-solid border-neutral-200">
                    <div className="flex justify-center items-center px-0.5">
                      <span className="font-medium text-lg text-neutral-900">
                        Learn more
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2.5 grow bg-indigo-700 px-6 py-4 rounded">
                    <div className="flex justify-center items-center px-0.5">
                      <span className="font-medium text-lg text-white">
                        See pricing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={imageSrc}
                alt="Hero Image"
                className="flex justify-center items-center grow object-cover py-16 rounded-2xl"
                width={488}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSimple.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default HeroSimple;
