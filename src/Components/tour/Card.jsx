import React from "react";

const pics = "/comp.png";

const Card = () => {
  const cardsData = [
    {
      image: pics,
      title: "Town Hall Activations",
      h2: "Grassroots engagements and onboarding of 100,000 underbanked individuals into DeFi.",
      text: "Focus: Wallet creation, savings education, and financial inclusion.",
    },
    {
      image: pics,
      title: "Marketplace Invasions",
      h2: "Live demonstrations of blockchain use in everyday trade.",
      text: "Focus: Vendors accepting crypto payments, hands-on DeFi exposure.",
    },
    {
      image: pics,
      title: "Hub & Community Visits",
      h2: "Collaborations with blockchain hubs and communities to host mini-events, trainings, and panels.",
      text: "Focus: Developer education, startup networking, ecosystem building.",
    },
    {
      image: pics,
      title: "Education & Awareness Campaigns",
      h2: "Short digital and on-ground activations spreading blockchain literacy.",
      text: "Focus: Simplifying blockchain for new users.",
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-black px-5 lg:py-10 md:px-7 lg:px-10 xl:px-12 2xl:px-15 pt-10 pb-6 gap-4">
        <h2 className="getai resize font-black text-[24px] md:text-[40px] text-white">
          Tour Components
        </h2>

        <p className="sans font-normal desc mt-3 leading-5 tracking-[-0.6%] max-w-5xl">
          Join us at the Ibom Blockchain Summit, where visionaries and pioneers
          converge to explore the future of Blockchain technology. This annual
          event is dedicated to fostering collaboration and innovation,
          providing a unique opportunity to engage with thought leaders and
          discover cutting-edge developments in the Web3 space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-15 py-4 bg-black transition-all duration-500 px-5 pb-15 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-158.75 min-w-70 bg-white space-y-5 py-8 px-5 rounded-xl"
          >
            <img
              className="object-cover w-full min-w-60 min-h-60 rounded-lg"
              src={card.image}
              alt={card.title}
            />

            <div className="flex flex-col space-y-3">
              <h5 className="sans leading-5 tracking-[6%] text-[#716E76] font-medium text-[14px] uppercase">
                {card.title}
              </h5>

              <h2 className="sans text-[18px] text-[#161518] font-normal leading-6 tracking-[-1.5%]">
                {card.h2}
              </h2>

              <p className="sans text-[14px] text-[#161518] leading-5 tracking-[-0.6%] font-normal">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
