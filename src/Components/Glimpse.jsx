import React from "react";

const Glimpse = () => {
  return (
    <>
      <div className="flex flex-col w-full py-10 lg:py-20 px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
        <h2
          className="  font-black
          getai
          mb-10
          text-[30px] leading-10 tracking-[-0.005em]
          sm:text-[40px] sm:leading-[44px] sm:tracking-[0em]
          md:text-[48px] md:leading-[50px] md:tracking-[0.02em]
          lg:text-[56px] lg:leading-[56px] lg:tracking-[0.05em]
          xl:text-[64px] xl:leading-[60px] xl:tracking-[0.08em]
          2xl:text-[70px] 2xl:leading-[64px] 2xl:tracking-[0.10em]
          lg:text-center lg:mb-15
          w-[256px] md:w-full
          "
          
        >
          {" "}
          A Glimpse into IBS 2025
        </h2>
        <div className="grid grid-cols-3 items-center gap-2">
          {/* LEFT COLUMN */}
          <div
            className="
      grid grid-cols-1 gap-2 justify-self-start
      w-full
    "
          >
            <div
              className="
        bg-amber-200 w-full
        h-13.25
        sm:h-18
        md:h-25.25
        lg:h-32.5
        xl:h-39.75
        2xl:h-46
        rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
        sec
      "
            />
            <div
              className="
        bg-amber-100 w-full
        h-28
        sm:h-37.75
        md:h-53
        lg:h-68.25
        xl:h-83.75
        2xl:h-97
        rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
        sec
      "
            />
            <div
              className="
        bg-amber-200 w-full
        h-13.25
        sm:h-18
        md:h-25.25
        lg:h-32.5
        xl:h-39.75
        2xl:h-46
        rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
        sec
      "
            />
          </div>

          {/* CENTER COLUMN */}
          <div className="flex justify-center">
            <div
              className="
        bg-white flex items-center justify-center
        w-[154px] h-[228px]
        sm:w-[208px] sm:h-[308px]
        md:w-[293px] md:h-[433px]
        lg:w-[377px] lg:h-[559px]
        xl:w-[462px] xl:h-[684px]
        2xl:w-[537px] 2xl:h-[796px]
        rounded-lg
      "
            >
              h
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
      grid grid-cols-1 gap-2 justify-self-end
      w-full
    "
          >
            <div
              className="
        bg-white w-full
        h-[53px]
        sm:h-[72px]
        md:h-[101px]
        lg:h-[130px]
        xl:h-[159px]
        2xl:h-[184px]
        rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
        sec
      "
            />
            <div
              className="
        bg-amber-100 w-full
        h-[112px]
        sm:h-[151px]
        md:h-[212px]
        lg:h-[273px]
        xl:h-[335px]
        2xl:h-[388px]
        rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
        sec
      "
            />
            <div
              className="
        bg-amber-200 w-full
        h-[53px]
        sm:h-[72px]
        md:h-[101px]
        lg:h-[130px]
        xl:h-[159px]
        2xl:h-[184px]
        rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
        sec
      "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Glimpse;
