import Image from "next/image";

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
              <svg
                className="w-[13.333333015441895px] h-[12.963600158691406px] text-indigo-700"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13l-1 1 4 4H6v2h8l-4 4 1 1 6-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
