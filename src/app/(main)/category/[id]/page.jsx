import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  const data = await res.json();
  return data.data.news_category;
}

async function getNewsByCategoriesId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`
  );

  const data = await res.json();
  return data.data;
}

const Page = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoriesId(id);

  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-4">
      {/* Left Sidebar */}
      <div className="col-span-3 p-4">
        <LeftSideBar
          categories={categories}
          activeId={id}
        />
      </div>

      {/* Main Content */}
      <div className="col-span-6">
        <h2 className="text-2xl font-bold mb-4">All News</h2>

        <div className="space-y-4">
          {news?.length > 0 ? (
            news.map((n) => (
              <div
                key={n._id}
                className="p-6 border rounded-md shadow-sm"
              >
                <h3 className="text-lg font-semibold">
                  {n.title}
                </h3>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500 border rounded-md">
              No news available
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Page;