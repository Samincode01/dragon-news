import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoriesId } from "@/lib/data";



export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCategoriesId("01");

  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <LeftSideBar categories={categories} activeId={"01"} />
      </div>

      <div className="col-span-6 bg-green-100 font-bold">
        All News

        <div className="space-y-4">
          {news?.map((n) => (
            <NewsCard key={n._id} className="p-8 rounded-md border" news={n}>
              {n.title}
            </NewsCard>
          ))}
        </div>
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}