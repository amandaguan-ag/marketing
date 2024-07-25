import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="h-[233px] w-[340px] flex flex-col justify-center gap-4 bg-white p-6 rounded-lg border border-solid border-neutral-200 shadow-md">
      <div className="flex justify-center items-center gap-4 w-full">
        <div className="w-12 h-12">
          <Image
            src="/profile-thumbnail.png"
            alt="Profile picture of Sarah Dole"
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-semibold text-lg text-neutral-900">
            Sarah Dole
          </span>
          <span className="font-normal text-sm text-neutral-600">
            @sarahdole
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-2 w-full rounded-lg">
        <span className="font-normal text-base text-neutral-600">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
