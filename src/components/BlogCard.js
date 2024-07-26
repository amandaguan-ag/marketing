import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

const BlogCard = ({ title, category, description, imageSrc }) => {
  return (
    <article className="w-[340px] flex flex-col bg-white rounded-lg shadow-md border border-neutral-200">
      <Image
        src={imageSrc}
        alt={`${title} image`}
        width={340}
        height={288}
        className="self-stretch h-72 object-cover rounded-t-lg"
      />
      <div className="flex flex-col gap-3 self-stretch px-4 py-6">
        <header className="flex flex-col gap-2 self-stretch relative">
          <div
            className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 absolute top-0 left-0"
            aria-label={`Category: ${category}`}
          >
            <span className="font-normal text-sm text-center text-green-700">
              {category}
            </span>
          </div>
          <h2 className="font-semibold text-lg text-neutral-900 mt-8">
            {title}
          </h2>
        </header>
        <p className="font-medium text-base text-neutral-600">{description}</p>
        <footer
          className="flex justify-start items-center gap-1.5 mt-auto relative"
          style={{ paddingBottom: "36px" }}
        >
          <a
            href="#"
            className="flex justify-start items-center gap-1.5 px-0.5 text-indigo-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label={`Read more about ${title}`}
          >
            <span>Read more</span>
            <RiArrowRightLine className="w-5 h-5 text-indigo-700" />
          </a>
        </footer>
      </div>
    </article>
  );
};

export default BlogCard;
