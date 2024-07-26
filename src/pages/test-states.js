import { RiArrowRightLine } from "@remixicon/react";

export default function TestStatesPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <div className="w-[340px] flex flex-col bg-white rounded-lg shadow-md border border-neutral-200 p-6">
        <div className="flex justify-start items-center gap-1.5 mb-4">
          <span className="font-medium text-base text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Read more
          </span>
          <RiArrowRightLine className="w-5 h-5 text-indigo-700" />
        </div>
        <div className="flex justify-start items-center gap-1.5 mb-4">
          <span
            className="font-medium text-base text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            tabIndex="0"
          >
            Read more (Focus)
          </span>
          <RiArrowRightLine className="w-5 h-5 text-indigo-700" />
        </div>
        <div className="flex justify-start items-center gap-1.5 mb-4">
          <span
            className="font-medium text-base text-indigo-700 text-opacity-50 cursor-not-allowed"
            aria-disabled="true"
          >
            Read more (Disabled)
          </span>
          <RiArrowRightLine className="w-5 h-5 text-indigo-700 text-opacity-50" />
        </div>
      </div>
    </main>
  );
}
