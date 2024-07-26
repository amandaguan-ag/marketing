import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

const BlogCard = ({ title, category, description, imageSrc }) => {
  return (
    <div className="w-[340px] flex flex-col bg-white rounded-lg shadow-md">
      <Image
        src={imageSrc}
        alt={title}
        width={340}
        height={288}
        className="self-stretch h-72 object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-3 self-stretch px-4 py-6">
        <div className="flex flex-col gap-2 self-stretch relative">
          <div
            className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 absolute"
            style={{ top: "0px", left: "0px" }}
          >
            <span className="font-normal text-sm text-center text-green-700">
              {category}
            </span>
          </div>
          <span className="font-semibold text-lg text-neutral-900 mt-8">
            {title}
          </span>
        </div>
        <div
          className="flex flex-col gap-6 self-stretch mt-auto"
          style={{ paddingBottom: "36px" }}
        >
          <span className="font-medium text-base text-neutral-600">
            {description}
          </span>
          <div className="flex justify-center items-center gap-1.5 rounded">
            <div className="flex justify-center items-center px-0.5">
              <span className="font-medium text-base text-indigo-700">
                Read more
              </span>
            </div>
            <div className="w-5 h-5">
              <RiArrowRightLine className="w-[13.333333015441895px] h-[12.963600158691406px] text-indigo-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
