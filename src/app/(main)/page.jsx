import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

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

export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCategoriesId("03");

  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <LeftSideBar categories={categories} activeId={null} />
      </div>

      <div className="col-span-6 bg-green-100 font-bold">
        All News

        <div className="space-y-4">
          {news?.map((n) => (
            <div key={n._id} className="p-8 rounded-md border">
              {n.title}
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}