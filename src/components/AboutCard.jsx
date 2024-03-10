import Icon1 from "/images/icon-online.svg";
import Icon2 from "/images/icon-budgeting.svg";
import Icon3 from "/images/icon-onboarding.svg";
import Icon4 from "/images/icon-api.svg";

function AboutCard() {
  const cardData = [
    {
      title: "Online Banking",
      src: Icon1,
      description: `Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.`,
    },
    {
      title: "Simple Budgeting",
      src: Icon2,
      description: `See exactly where your money goes each month. Receive notifications when you’re close to your  hitting limits..`,
    },
    {
      title: "Fast Onboarding",
      src: Icon3,
      description: `We don’t do branches. Open your account in minutes online and start taking control of your finances right away.`,
    },
    {
      title: "Open API",
      src: Icon4,
      description: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
    },
  ];
  return (
    <>
      {cardData.map((card) => {
        return (
          <div key={card.src}>
            <img src={card.src} alt="" className="mx-auto md:mx-0" />
            <h2 className="my-3 text-2xl">{card.title}</h2>
            <p className="mx-auto w-[89%] md:mx-0 md:w-full">
              {card.description}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default AboutCard;
