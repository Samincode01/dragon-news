import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
const news = [
  {
    id: 1,
    news: "Government announces new education budget with increased funding for digital learning nationwide.",
  },
  {
    id: 2,
    news: "Heavy rainfall expected across several districts this week, meteorological department issues warning.",
  },
  {
    id: 3,
    news: "National cricket team secures thrilling victory in final over to win the series.",
  },
];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center gap-4 rounded-md bg-gray-400 px-4 py-3">
        <button className="btn shrink-0 bg-red-500 text-white border-none hover:bg-red-600">
          Latest News
        </button>

        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={true} speed={100}>
            {news.map((item) => (
    <span key={item.id} className="mx-8 inline-block">
      {item.news}• 
    </span>
  ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;