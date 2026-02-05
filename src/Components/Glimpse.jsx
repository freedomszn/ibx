import React, { useEffect, useMemo, useState } from "react";

const FADE_MS = 900;

const Glimpse = () => {
  const leftImages = useMemo(
    () => [
      "/gallery/i.jpg",
      "/gallery/ii.jpg",
      "/gallery/iii.jpg",
      "/gallery/iv.jpg",
      "/gallery/v.jpg",
    ],
    [],
  );

  const rightImages = useMemo(
    () => [
      "/gallery/vi.jpg",
      "/gallery/vii.jpg",
      "/gallery/viii.jpg",
      "/gallery/ix.jpg",
      "/gallery/x.jpg",
    ],
    [],
  );

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2500);
    return () => clearInterval(id);
  }, []);

  const leftSrcs = [
    leftImages[tick % leftImages.length],
    leftImages[(tick + 1) % leftImages.length],
    leftImages[(tick + 2) % leftImages.length],
  ];

  const rightSrcs = [
    rightImages[tick % rightImages.length],
    rightImages[(tick + 1) % rightImages.length],
    rightImages[(tick + 2) % rightImages.length],
  ];

  // ✅ real crossfade + subtle zoom
  const ImgBox = ({ src, className = "" }) => {
    const [aSrc, setASrc] = useState(src); // currently visible
    const [bSrc, setBSrc] = useState(src); // incoming
    const [showB, setShowB] = useState(false);

    useEffect(() => {
      if (src === aSrc) return;

      // set incoming image
      setBSrc(src);
      // next tick => trigger transition
      const raf = requestAnimationFrame(() => setShowB(true));

      // after fade, commit B as A and reset
      const t = setTimeout(() => {
        setASrc(src);
        setShowB(false);
      }, FADE_MS);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(t);
      };
    }, [src, aSrc]);

    return (
      <div className={`relative overflow-hidden w-full ${className}`}>
        {/* base (A) */}
        <img
          src={aSrc}
          alt=""
          className="
            absolute inset-0 h-full w-full object-cover
            transition-[opacity,transform,filter] duration-[900ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            will-change-[opacity,transform]
          "
          style={{
            opacity: showB ? 0 : 1,
            transform: showB ? "scale(1.015)" : "scale(1)",
            filter: showB ? "blur(1px)" : "blur(0px)",
          }}
          loading="lazy"
          draggable={false}
        />

        {/* incoming (B) */}
        <img
          src={bSrc}
          alt=""
          className="
            absolute inset-0 h-full w-full object-cover
            transition-[opacity,transform] duration-[900ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            will-change-[opacity,transform]
          "
          style={{
            opacity: showB ? 1 : 0,
            transform: showB ? "scale(1)" : "scale(1.02)",
          }}
          loading="lazy"
          draggable={false}
        />

        {/* premium overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/10" />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full py-10 lg:py-20 px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
      <h2
        className="
          font-black getai mb-10
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
        A Glimpse into IBS 2025
      </h2>

      <div className="grid grid-cols-3 items-center gap-2">
        {/* LEFT COLUMN */}
        <div className="grid grid-cols-1 gap-2 justify-self-start w-full">
          <ImgBox
            src={leftSrcs[0]}
            className="
              h-20 sm:h-26 md:h-36 lg:h-32.5 xl:h-39.75 2xl:h-46
              rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
            "
          />
          <ImgBox
            src={leftSrcs[1]}
            className="
              h-44 sm:h-58 md:h-78 lg:h-68.25 xl:h-83.75 2xl:h-97
              rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
            "
          />
          <ImgBox
            src={leftSrcs[2]}
            className="
              h-20 sm:h-26 md:h-36 lg:h-32.5 xl:h-39.75 2xl:h-46
              rounded-[10px] sm:rounded-xl lg:rounded-[14px] 2xl:rounded-2xl
            "
          />
        </div>

        {/* CENTER COLUMN */}
        <div className="flex justify-center">
          <div
            className="
              bg-white flex items-center justify-center rounded-lg
              w-[154px] h-[352px]
              sm:w-[208px] sm:h-[456px]
              md:w-[293px] md:h-[616px]
              lg:w-[377px] lg:h-[549px]
              xl:w-[462px] xl:h-[669px]
              2xl:w-[537px] 2xl:h-[772px]
              shadow-[0_10px_30px_rgba(0,0,0,.25)]
            "
          >
            h
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-cols-1 gap-2 justify-self-end w-full">
          <ImgBox
            src={rightSrcs[0]}
            className="
              h-20 sm:h-26 md:h-36 lg:h-32.5 xl:h-39.75 2xl:h-46
              rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
            "
          />
          <ImgBox
            src={rightSrcs[1]}
            className="
              h-44 sm:h-58 md:h-78 lg:h-68.25 xl:h-83.75 2xl:h-97
              rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
            "
          />
          <ImgBox
            src={rightSrcs[2]}
            className="
              h-20 sm:h-26 md:h-36 lg:h-32.5 xl:h-39.75 2xl:h-46
              rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[16px]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
