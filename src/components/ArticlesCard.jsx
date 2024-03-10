import Image1 from "/images/image-currency.jpg";
import Image2 from "/images/image-restaurant.jpg";
import Image3 from "/images/image-plane.jpg";
import Image4 from "/images/image-confetti.jpg";

export function ArticlesCard() {
  const cardData = [
    {
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description: `The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …`,
      image: Image1,
    },
    {
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`,
      image: Image2,
    },
    {
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …`,
      image: Image3,
    },
    {
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...`,
      image: Image4,
    },
  ];
  return (
    <>
      {cardData.map((card) => {
        return (
          <div
            key={card.author}
            className="h-fit overflow-hidden rounded-xl bg-white"
          >
            <img
              className="h-auto w-full md:h-48  lg:h-52"
              src={card.image}
              alt=""
            />
            <div className="p-4">
              <small className="text-gray-400"> {card.author} </small>
              <h2 className="mt-4 cursor-pointer text-xl hover:text-[#36e464] transition-colors">
                {card.title}
              </h2>
              <p className="mt-4 text-gray-400">{card.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
