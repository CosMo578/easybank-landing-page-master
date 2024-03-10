import AboutCard from "./AboutCard";
export function About() {
  return (
    <section className="bg-LightGrayishBlue px-4 pb-1 pt-24 text-center md:px-14 md:text-left  lg:px-20 xl:px-36">
      <h2 className="mx-auto mb-4 block w-1/2 text-center text-4xl md:w-full md:text-left">
        Why choose Easybank?
      </h2>
      <p className="mx-auto block w-4/5 md:mx-0 md:w-[75%] lg:w-[65%] xl:w-[55%]">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div className="my-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AboutCard />
      </div>
    </section>
  );
}
