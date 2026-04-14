"use client";

import { useEffect, useRef, useState } from "react";
import type { RecipeContent } from "../data/recipes";

const ROTATION_START = -155.38;

type RecipeArticleProps = {
  recipe: RecipeContent;
};

function IngredientsList({ recipe }: { recipe: RecipeContent }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full"
      data-name="Ingredients"
    >
      <p className="font-discordia font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        ingredients
      </p>
      <div className="font-polymath font-normal leading-[0] relative shrink-0 text-[18px] w-full">
        {recipe.ingredientGroups.map((group, gi) => (
          <div key={`${gi}-${group.title}`}>
            <p className="font-polymath font-bold leading-[1.4] mb-0 whitespace-pre-wrap">
              {group.title}
            </p>
            <ul
              className={
                gi < recipe.ingredientGroups.length - 1
                  ? "list-disc mb-0"
                  : "list-disc"
              }
            >
              {group.items.map((item, ii) => (
                <li
                  key={ii}
                  className={
                    ii < group.items.length - 1 ? "mb-0 ms-[27px]" : "ms-[27px]"
                  }
                >
                  <span className="leading-[1.4]">{item}</span>
                </li>
              ))}
            </ul>
            {gi < recipe.ingredientGroups.length - 1 ? (
              <p className="leading-[1.4] mb-0 whitespace-pre-wrap">&nbsp;</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function FixedIngredients({ recipe }: { recipe: RecipeContent }) {
  const ingredientsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ingredientsScrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const epsilon = 2;
      const atBottom = scrollTop + clientHeight >= scrollHeight - epsilon;
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
      className="bg-[#b0271c] flex h-screen min-h-0 w-[300px] shrink-0 flex-col gap-[30px] px-[50px] py-[100px] text-[#f9f7ea] sticky left-0 top-0 z-10"
      data-name="FIXED INGREDIENTS"
    >
      <p className="w-full shrink-0 font-discordia text-[40px] capitalize italic leading-[1.1]">
        {recipe.title}
      </p>
      <div
        ref={ingredientsScrollRef}
        className="min-h-0 flex-1 overflow-y-auto overscroll-y-auto pr-1"
        data-name="INGREDIENTS SCROLL"
      >
        <IngredientsList recipe={recipe} />
      </div>
    </div>
  );
}

function InstructionsBody({ recipe }: { recipe: RecipeContent }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[30px] items-start not-italic relative shrink-0 text-[#b0271c] w-[577px]"
      data-name="INSTRUCTIONS"
    >
      <p className="font-discordia font-bold leading-[1.1] relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        directions
      </p>
      <div className="font-polymath leading-[0] relative shrink-0 text-[18px] w-full">
        <ol className="mb-0 list-decimal list-outside ps-[1.75em]">
          {recipe.directions.map((text, i) => (
            <li
              key={i}
              className="leading-[1.4] ps-[0.35em] [&:not(:last-child)]:pb-4"
            >
              <span className="leading-[1.4]">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ScrollableInstructions({
  recipe,
  onScroll,
}: {
  recipe: RecipeContent;
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
      const atBottom = scrollTop + clientHeight >= scrollHeight - epsilon;
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
        <InstructionsBody recipe={recipe} />
      </div>
    </div>
  );
}

export default function RecipeArticle({ recipe }: RecipeArticleProps) {
  const [rotation, setRotation] = useState(ROTATION_START);

  const handleScroll = (
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
  ) => {
    const denom = Math.max(1, scrollHeight - clientHeight);
    const scrollPercentage = scrollTop / denom;
    setRotation(ROTATION_START + scrollPercentage * 360);
  };

  return (
    <div
      className="content-stretch flex items-stretch relative size-full overflow-hidden"
      data-name={recipe.dataName}
    >
      <FixedIngredients recipe={recipe} />

      <div className="relative flex-1 min-w-0">
        <ScrollableInstructions recipe={recipe} onScroll={handleScroll} />

        <div className="absolute top-0 right-0 h-full pointer-events-none z-20 flex items-center justify-end pr-[40px]">
          <div
            className="-scale-y-100 flex-none transition-transform duration-100"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div
              className="object-cover w-[300px] h-[280px] relative"
              data-name="FOOD IMAGE"
            >
              <img
                alt={recipe.imageAlt}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={recipe.imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
