async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  const data = await res.json();

  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto my-[60px] grid grid-cols-12 gap-4">
      <div className="col-span-3  p-4">
        <h2 className="text-lg font-bold">All Categories</h2>

        <ul className="mt-4 flex flex-col gap-3">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className="rounded-md bg-slate-100 p-2 text-center text-lg font-bold"
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-6 bg-green-100 p-4 text-3xl font-bold">
        All News
      </div>

      <div className="col-span-3 bg-green-100 p-4 text-3xl font-bold">
        Social Icons
      </div>
    </div>
  );
}