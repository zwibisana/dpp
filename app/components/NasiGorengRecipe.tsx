import { useRef, useState, useEffect } from "react";

function Ingredients() {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="Ingredients"
    >
      <p className="font-discordia leading-[1.1] not-italic relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        ingredients
      </p>
      <div className="font-polymath font-normal leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="font-polymath font-bold leading-[1.4] mb-0 whitespace-pre-wrap">
          Sauce
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">(50g) Peanuts</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">Tamarind paste</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">Birds eye chilli</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">Salt, to taste</span>
          </li>
        </ul>
        <p className="leading-[1.4] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <p className="font-polymath font-bold leading-[1.4] mb-0 whitespace-pre-wrap">
          Salad
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">(50g) Long Bean</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.4]">(50g) Beansprouts</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">1 cucumber</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FixedIngredients() {
  return (
    <div
      className="bg-[#b0271c] content-stretch flex flex-col gap-[30px] h-screen items-start overflow-clip px-[50px] py-[100px] sticky left-0 top-0 shrink-0 text-[#f9f7ea] w-[300px] z-10"
      data-name="FIXED INGREDIENTS"
    >
      <p className="capitalize font-discordia italic leading-[1.1] relative shrink-0 text-[40px] w-full">
        Karedok
      </p>
      <Ingredients />
    </div>
  );
}

function Instructions() {
  return (
    <div
      className="content-stretch flex flex-col gap-[30px] items-start not-italic relative shrink-0 text-[#b0271c] w-[577px]"
      data-name="INSTRUCTIONS"
    >
      <p className="font-discordia leading-[1.1] relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        directions
      </p>
      <div className="font-polymath leading-[0] relative shrink-0 text-[18px] w-full">
        <ol className="mb-0" start={1}>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">
              Recipe preservation within Indonesia functions as far more than a
              practical effort to simply record cooking instructions; in truth,
              it operates as an enduring cultural practice embedded in
              enculturation, memory, and identity formation.
            </span>
          </li>
        </ol>
        <p className="leading-[1.4] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ol className="mb-0" start={2}>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">
              Across generations, recipes are transmitted orally, through
              observation, and through shared labor in kitchens, where
              techniques such as grinding fresh bumbu using an ulek (mortar and
              pestle), wrapping foods in banana leaves, or balancing sweet,
              salty, and spicy flavors are learned through participation rather
              than written measurement.
            </span>
          </li>
        </ol>
        <p className="leading-[1.4] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ol className="mb-0" start={3}>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">
              In this way, preservation is inseparable from socialization: to
              learn a recipe is simultaneously to learn when it is served, who
              prepares it, and what meanings it carries within family and ritual
              life.
            </span>
          </li>
        </ol>
        <p className="leading-[1.4] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ol start={4}>
          <li className="ms-[27px]">
            <span className="leading-[1.4]">
              These practices reflect broader Indonesian food habits shaped by
              geography, trade history, and religious influence, as seen in the
              continued use of indigenous ingredients alongside techniques
              introduced through centuries of cultural exchange.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function ScrollableInstructions({
  onScroll,
}: {
  onScroll: (
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
  ) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      onScroll(
        scrollRef.current.scrollTop,
        scrollRef.current.scrollHeight,
        scrollRef.current.clientHeight,
      );
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const epsilon = 2;
      const atBottom =
        scrollTop + clientHeight >= scrollHeight - epsilon;
      const atTop = scrollTop <= epsilon;

      if ((atBottom && e.deltaY > 0) || (atTop && e.deltaY < 0)) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      className="bg-[#f9f7ea] flex-[1_0_0] h-screen min-h-px min-w-px overflow-y-auto overscroll-y-auto"
      data-name="SCROLLABLE INSTRUCTIONS"
      ref={scrollRef}
      onScroll={handleScroll}
    >
      <div className="content-stretch flex flex-col items-start px-[86px] py-[100px] relative min-h-[120vh]">
        <Instructions />
      </div>
    </div>
  );
}

export default function NasiGorengRecipe() {
  const [rotation, setRotation] = useState(-155.38);

  const handleScroll = (
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
  ) => {
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    setRotation(-155.38 + scrollPercentage * 360);
  };

  return (
    <div
      className="content-stretch flex items-stretch relative size-full overflow-hidden"
      data-name="Karedok Recipe"
    >
      <FixedIngredients />

      {/* Scrollable area takes remaining width */}
      <div className="relative flex-1 min-w-0">
        <ScrollableInstructions onScroll={handleScroll} />

        {/* Image is absolutely positioned over the scrollable panel */}
        <div
          className="absolute top-0 right-0 h-full pointer-events-none z-20 flex items-center justify-end pr-[40px]"
        >
          <div
            className="-scale-y-100 flex-none transition-transform duration-100"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="object-cover w-[300px] h-[280px] relative" data-name="FOOD IMAGE">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src="Karedok.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}