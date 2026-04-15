"use client";

import type { RecipeContent } from "../data/recipes";

type RecipeArticleProps = {
  recipe: RecipeContent;
};

function IngredientsList({ recipe }: { recipe: RecipeContent }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[10px] items-start relative w-full h-full pt-0"
      data-name="Ingredients"
    >
      <p className="font-discordia font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        ingredients
      </p>
      <div className="font-polymath font-normal leading-[0] pt-2 relative shrink-0 text-[18px] w-full">
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

function InstructionsBody({ recipe }: { recipe: RecipeContent }) {
  return (
    <div
      className="content-stretch flex w-full max-w-none pt-39 flex-col items-start gap-[30px] not-italic text-[#b0271c]"
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

export default function RecipeArticle({ recipe }: RecipeArticleProps) {
  return (
    <article
      className="relative w-full bg-[#f9f7ea]"
      data-name={recipe.dataName}
    >
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
        <div className="w-full self-stretch bg-[#b0271c] px-14 py-20 text-[#f9f7ea] lg:w-[360px]">
          <p className="w-full font-discordia text-[40px] capitalize italic leading-[1.1]">
            {recipe.title}
          </p>
          <div className="mt-8 w-full">
            <IngredientsList recipe={recipe} />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 pb-30 pr-6 md:pr-10 lg:pr-16">
          <div className="flex w-full flex-col items-start gap-8 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <InstructionsBody recipe={recipe} />
            </div>
            <div
              className="w-full max-w-[360px] shrink-0 pt-30 md:ml-12 lg:ml-20"
              data-name="FOOD IMAGE"
            >
              <img
                alt={recipe.imageAlt}
                className="h-auto w-full object-cover"
                src={recipe.imageSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
