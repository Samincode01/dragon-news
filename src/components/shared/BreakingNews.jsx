import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center gap-4 rounded-md bg-gray-400 px-4 py-3">
        <button className="btn shrink-0 bg-red-500 text-white border-none hover:bg-red-600">
          Latest News
        </button>

        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover speed={50}>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;