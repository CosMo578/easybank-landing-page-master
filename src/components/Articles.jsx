import { ArticlesCard } from "./ArticlesCard";

export function Articles() {
  return (
    <section className="bg-VeryLightGray px-8 py-10 md:px-14 md:pt-20 lg:px-20 xl:px-36">
      <h2 className="mb-10 text-center text-4xl capitalize md:text-left  md:text-4xl">
        Latest Articles
      </h2>
      <div className="mb-20 grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
        <ArticlesCard />
      </div>
    </section>
  );
}
