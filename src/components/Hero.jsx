import Image from "/images/image-mockups.png";

export function Hero() {
  return (
    <main className="flex flex-col-reverse items-center justify-between px-8 py-10 md:px-14 lg:flex-row lg:px-20 lg:py-20 xl:px-36">
      <div className="mt-10 px-8 md:w-full lg:w-[43%]">
        <h1 className="mb-8 block text-center text-3xl lg:text-left lg:text-5xl">
          Next generation digital banking
        </h1>

        <p className="mb-8 text-center md:mx-auto md:w-[70%] lg:w-full lg:text-left">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="mx-auto block lg:ml-0">Request Invite</button>
      </div>

      <div className="hero-mobile -mt-[9.7rem] mb-5 size-96 max-lg:size-auto md:-mt-52 lg:-mr-[5rem] lg:-mt-[4.5rem] lg:scale-[1.5] xl:-mr-[9.2rem]">
        <img src={Image} alt="" />
      </div>
    </main>
  );
}
