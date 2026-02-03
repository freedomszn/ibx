// import React from "react";

// const Cards = ({ image, title, text, className = "" }) => {
//   return (
//     <>
//       <div className="flex flex-col w-90 h-90 bg-[#161518]">
//         <img src={image} alt="" />
//         <h2>
//           {title} {className}
//         </h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// };

// export default Cards;

import React from "react";

const Cards = ({ title, text, image, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full h-full
        bg-[#161518]
        p-5
        transition
        duration-300
        hover:scale-[1.02]
        active:scale-[0.99]
      "
    >
      <div className="flex flex-col items-start gap-4 h-90 w-90">
        <img
          src={image}
          alt={title}
          className="h-15.5 w-15.5 object-cover shrink-0 mt-9"
          loading="lazy"
        />

        <div className="flex flex-col items-start mt-8">
          <h3 className="getai text-base sm:text-lg leading-snug">{title}</h3>
          <p className="sans text-start mt-4 text-sm leading-6 opacity-80 w-75">
            {text}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Cards;
